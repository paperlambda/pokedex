import React from 'react'
import PokemonService from '@/services/pokemon-service'
import PokemonCard from '@/containers/PokemonCard'
import FilterForm from '@/containers/FilterForm'
import SkeletonCard from '@/components/SkeletonCard'

const PokemonList = () => {
  const PokemonSvc = React.useMemo(() => new PokemonService(), [])
  let rockBottom = React.useRef(null)

  const pokemonReducer = (state, action) => {
    switch (action.type) {
      case 'SET_POKEMON':
        return { ...state, pokemons: [...state.pokemons, ...action.pokemons] }
      case 'SET_LOADING':
        return { ...state, loading: action.loading }
      case 'NEXT_OFFSET':
        return { ...state, offset: state.offset + 10 }
      case 'SET_FILTER':
        return { ...state, filter: action.filter, pokemons: [], offset: 0 }
      default:
        return state
    }
  }

  const [pokemon, pokemonDispatch] = React.useReducer(pokemonReducer, {
    pokemons: [],
    offset: 0,
    filter: null
  })

  const getPokemonList = React.useCallback(async () => {
    try {
      pokemonDispatch({ type: 'SET_LOADING', loading: true })
      const pokemonList = await PokemonSvc.getPokemonList({
        offset: pokemon.offset,
        filterType: pokemon.filter
      })
      pokemonDispatch({ type: 'SET_POKEMON', pokemons: pokemonList })
      pokemonDispatch({ type: 'SET_LOADING', loading: false })
    } catch (e) {
      pokemonDispatch({ type: 'SET_LOADING', loading: false })
      console.error(e)
    }
  }, [pokemonDispatch, pokemon.offset, pokemon.filter])

  React.useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  // Add observer for intersecting DOM node
  const scrollObserver = React.useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            setTimeout(() => {
              pokemonDispatch({ type: 'NEXT_OFFSET' })
            }, 300)
          }
        })
      }).observe(node)
    },
    [pokemonDispatch]
  )

  React.useEffect(() => {
    if (rockBottom.current) {
      scrollObserver(rockBottom.current)
    }
  }, [scrollObserver, rockBottom])

  const applyFilter = type => {
    pokemonDispatch({ type: 'SET_FILTER', filter: type })
  }

  return (
    <div>
      <FilterForm willApplyFilter={applyFilter} />
      <div>
        {pokemon.pokemons.map(pkmn => (
          <PokemonCard key={pkmn.name} pokemon={pkmn} />
        ))}

        {/* SKELETON LOADING INDICATOR */}
        {!pokemon.filter && (
          <div>
            {[1, 2, 3, 4].map(v => (
              <SkeletonCard key={v} />
            ))}
            <div className="h-24" ref={rockBottom} />
          </div>
        )}
      </div>
    </div>
  )
}

export default PokemonList

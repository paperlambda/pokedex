import React from 'react'
import PokemonService from '@/services/pokemon-service'
import PokemonCard from '@/containers/PokemonCard'

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
      default:
        return state
    }
  }

  const [pokemon, pokemonDispatch] = React.useReducer(pokemonReducer, {
    pokemons: [],
    offset: 0
  })

  const getPokemonList = React.useCallback(async () => {
    try {
      pokemonDispatch({ type: 'SET_LOADING', loading: true })
      const pokemonList = await PokemonSvc.getPokemonList(pokemon.offset)
      pokemonDispatch({ type: 'SET_POKEMON', pokemons: pokemonList })
      pokemonDispatch({ type: 'SET_LOADING', loading: false })
    } catch (e) {
      pokemonDispatch({ type: 'SET_LOADING', loading: false })
      console.error(e)
    }
  }, [pokemonDispatch, pokemon.offset])

  React.useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  // Add observer for intersecting DOM node
  const scrollObserver = React.useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            pokemonDispatch({ type: 'NEXT_OFFSET' })
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

  return (
    <div>
      {pokemon.pokemons.map(pkmn => (
        <PokemonCard key={pkmn.name} pokemon={pkmn} />
      ))}
      <div className="text-center mt-3" ref={rockBottom}>
        Loading...
      </div>
    </div>
  )
}

export default PokemonList

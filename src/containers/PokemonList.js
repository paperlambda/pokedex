import React from 'react'
import { Pokedex } from 'pokeapi-js-wrapper'
import PokemonCard from '@/containers/PokemonCard'

const PokemonList = () => {
  const PokemonAPI = React.useMemo(() => new Pokedex(), [])
  const [pokemons, setPokemons] = React.useState(null)
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    _getPokemonList()
  }, [])

  const _getPokemonList = async () => {
    try {
      setLoading(true)
      const pokemonList = await PokemonAPI.getPokemonsList({
        limit: 10,
        offset: 1
      })

      const { results } = pokemonList
      setPokemons(results)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList

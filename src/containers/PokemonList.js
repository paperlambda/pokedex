import React from 'react'
import PokemonService from '@/services/pokemon-service'
import PokemonCard from '@/containers/PokemonCard'
import FlatList from '@/containers/FlatList'

const PokemonList = () => {
  const PokemonSvc = React.useMemo(() => new PokemonService(), [])
  const [pokemons, setPokemons] = React.useState(null)
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    _getPokemonList()
  }, [])

  const _getPokemonList = async () => {
    try {
      setLoading(true)
      const pokemonList = await PokemonSvc.getPokemonList({
        offset: 0
      })
      setPokemons(pokemonList)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }

  const didReachThreshold = eventListener => {
    console.log('REACH THRESHOLD')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <FlatList onReachThreshold={didReachThreshold}>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </FlatList>
  )
}

export default PokemonList

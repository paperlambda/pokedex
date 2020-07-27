import React from 'react'
import PokemonCard from '@/containers/PokemonCard'

const PokemonList = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map(v => (
        <PokemonCard key={v} />
      ))}
    </div>
  )
}

export default PokemonList

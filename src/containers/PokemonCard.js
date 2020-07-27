import React from 'react'
import PropTypes from 'prop-types'

const PokemonCard = ({ pokemon }) => {
  const { name } = pokemon
  return (
    <div className="w-full flex mt-2">
      <div className="h-auto w-48 bg-gray-500 text-center flex-none rounded-l" />
      <div className="w-full border-r border-b border-t border-gray-400 bg-white rounded-r px-4 py-2 flex flex-col justify-between leading-normal">
        <div className="text-sm text-gray-700">#012</div>
        <div className="font-bold text-xl capitalize mb-1">{name}</div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Type</div>
          <div className="text-sm">Flying</div>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Height / Weight</div>
          <div className="text-sm">1.1 m / 32.0 kg</div>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Abilities</div>
          <div className="text-sm">
            Compound Eyes, Tinted Lens (Hidden Ability)
          </div>
        </div>
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string.isRequired
  })
}

export default PokemonCard

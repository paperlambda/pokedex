import React from 'react'
import PropTypes from 'prop-types'
import {
  formatHeightInMeter,
  formatWeightInKilogram
} from '@/utils/size-format'

const PokemonCard = ({ pokemon }) => {
  const { id, name, types, height, weight, abilities, sprites } = pokemon
  return (
    <div className="w-full flex mt-2">
      <div className="h-auto w-48 bg-gray-300 items-center justify-center flex flex-none rounded-l">
        <img src={sprites.front_default} alt={name} />
      </div>
      <div className="w-full border-r border-b border-t border-gray-400 bg-white rounded-r px-4 py-2 flex flex-col justify-between leading-normal">
        <div className="text-sm text-gray-700">{`#${id}`}</div>
        <div className="font-bold text-xl capitalize mb-1">{name}</div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Type</div>
          <div>
            {types.map(({ type, slot }) => (
              <div key={`${name}-type-${slot}`} className="text-sm">
                {type.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Height / Weight</div>
          <div className="text-sm">
            {formatHeightInMeter(height)} / {formatWeightInKilogram(weight)}
          </div>
        </div>
        <div className="mb-1">
          <div className="text-xs text-gray-600">Abilities</div>
          <div className="text-sm capitalize">
            {abilities
              .map(
                ({ ability, is_hidden }) =>
                  `${ability.name} ${is_hidden && '(Hidden Ability)'}`
              )
              .join(', ')}
          </div>
        </div>
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    abilities: PropTypes.array.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired
    })
  })
}

export default PokemonCard

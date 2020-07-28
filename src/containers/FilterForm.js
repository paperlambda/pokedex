import React from 'react'
import PropTypes from 'prop-types'
import PokemonTypes from '@/constants/pokemon-types'

const FilterForm = ({ willApplyFilter }) => {
  const didChange = type => {
    willApplyFilter(type)
  }

  return (
    <div className="w-full relative mt-2">
      <select
        onChange={e => didChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">---- Filter by type ----</option>
        {Object.keys(PokemonTypes).map(type => (
          <option key={`${type}-option`} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

FilterForm.propTypes = {
  willApplyFilter: PropTypes.func.isRequired
}

export default FilterForm

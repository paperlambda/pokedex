import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import PokemonTypes from '@/constants/pokemon-types'

const Pills = ({ type }) => (
  <div
    className="inline-block border rounded px-1 text-white capitalize text-sm leading-tight mr-1"
    css={css`
      background-color: ${PokemonTypes[type]};
      border-color: ${PokemonTypes[type]};
    `}
  >
    {type}
  </div>
)

Pills.propTypes = {
  type: PropTypes.string.isRequired
}

export default Pills

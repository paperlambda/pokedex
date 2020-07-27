import React from 'react'
import { css } from '@emotion/core'

const Navbar = () => (
  <div
    className="fixed w-screen flex content-center justify-center bg-gray-200"
    css={css`
      height: 56px;
      top: 0px;
    `}
  >
    <h3 className="flex items-center text-xl">Pokedex</h3>
  </div>
)

export default Navbar

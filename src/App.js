import React from 'react'
import ErrorBoundary from './containers/ErrorBoundary'
import Navbar from './components/Navbar'
import Main from './components/Main'
import PokemonList from '@/containers/PokemonList'

const App = () => {
  return (
    <ErrorBoundary>
      <Navbar />
      <Main>
        <PokemonList />
      </Main>
    </ErrorBoundary>
  )
}

export default App

import React from 'react'
import ErrorBoundary from "./containers/ErrorBoundary";

const App = () => {
    return (
        <ErrorBoundary>
            <h1>Successful Mount</h1>
        </ErrorBoundary>
    )
}

export default App

import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {
  fetchPokemon,
  PokemonDataView,
  PokemonForm,
  PokemonInfoFallback,
} from '../pokemon'

// class ErrorBoundary extends React.Component {
//   state = {error: null}
//   static getDerivedStateFromError(error) {
//     console.log(error)
//     return {error}
//   }

//   componentDidCatch() {
//     console.error(this.state.error)
//   }

//   render() {
//     const {error} = this.state
//     if (error) {
//       return <this.props.FallbackComponent error={error} />
//     }
//     return this.props.children
//   }
// }

const PokemonInfo = ({pokemonName}) => {
  const [state, setState] = React.useState({
    pokemon: null,
    status: 'idle',
    error: null,
  })

  React.useEffect(() => {
    if (!pokemonName || pokemonName.trim().length === 0) return

    setState({pokemon: null, status: 'pending', error: null})
    fetchPokemon(pokemonName)
      .then(fetchedPokemon => {
        console.log(fetchedPokemon)
        setState({pokemon: fetchedPokemon, status: 'resolved'})
      })
      .catch(err => {
        setState({pokemon: null, status: 'rejected', error: err})
      })
  }, [pokemonName])

  if (state.status === 'idle') {
    return <div>Submit a pokemon</div>
  }

  if (state.status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />
  }

  if (state.status === 'rejected') {
    throw state.error
  }

  return <PokemonDataView pokemon={state.pokemon} />
}

const ErrorFallback = ({error, resetErrorBoundary}) => (
  <div role="alert">
    There was an error:{' '}
    <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    <button onClick={() => resetErrorBoundary()}>Try again</button>
  </div>
)

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          resetKeys={[pokemonName]}
          onReset={() => setPokemonName('')}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App

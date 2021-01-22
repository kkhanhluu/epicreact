import * as React from 'react'

const CountContext = React.createContext()

function useCount(Context) {
  const context = React.useContext(Context)
  if (!context) {
    throw new Error('must be used in Provide')
  }
  return context
}

function CountProvider({children}) {
  const [state, setState] = React.useState(0)
  const value = [state, setState]
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function CountDisplay() {
  const [count] = useCount(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/* <CountProvider> */}
      <CountDisplay />
      <Counter />
      {/* </CountProvider> */}
    </div>
  )
}

export default App

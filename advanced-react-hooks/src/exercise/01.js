import * as React from 'react'

const nameRedeucer = (state, action) => {
  const {count} = state
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: count + action.step}
    default:
      return count
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(nameRedeucer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

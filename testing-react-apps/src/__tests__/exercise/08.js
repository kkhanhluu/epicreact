// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()
let result
function UseCustomCounterHook() {
  // const {count, increment, decrement} = useCounter()
  // return (
  //   <div>
  //     <div>Current count: {count}</div>
  //     <button onClick={decrement}>Decrement</button>
  //     <button onClick={increment}>Increment</button>
  //   </div>
  // )
  result = useCounter()
  return null
}

test('exposes the count and increment/decrement functions', () => {
  render(<UseCustomCounterHook />)

  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
  // const decrement = screen.getByRole('button', {name: /decrement/i})
  // const increment = screen.getByRole('button', {name: /increment/i})
  // const message = screen.getByText(/current count/i)

  // expect(message).toHaveTextContent(`Current count: 0`)
  // userEvent.click(increment)
  // expect(message).toHaveTextContent(`Current count: 1`)
  // userEvent.click(decrement)
  // expect(message).toHaveTextContent(`Current count: 0`)
})

/* eslint no-unused-vars:0 */

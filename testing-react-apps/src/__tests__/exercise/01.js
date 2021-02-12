// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement('div')
  //
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div)
  //
  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, div)
  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  const [decrement, increment] = Array.from(div.querySelectorAll('button'))
  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  const messageDiv = div.firstChild.querySelector('div')

  expect(messageDiv.textContent).toBe('Current count: 0')

  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 increment.click())
  increment.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: false,
      button: 0,
    }),
  )
  expect(messageDiv.textContent).toBe('Current count: 1')
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 decrement.click())
  decrement.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: false,
      button: 0,
    }),
  )
  expect(messageDiv.textContent).toBe('Current count: 0')
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  div.remove()
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */

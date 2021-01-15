// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef()
  const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(username)
  }

  const handleChange = event => {
    const value = event.target.value
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          ref={usernameRef}
          type="text"
          id="username"
          value={username}
        />
        <div role="alert">{error}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

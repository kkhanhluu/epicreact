// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', size = 'medium', ...otherProps}) => (
  <div className={`box box--${size}`.trim()} {...otherProps} />
)

const smallBox = (
  <Box className="box" size="small">
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box" size="medium">
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box" size="large">
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Handelclick from './Handelclick'
// import Handelhover from './handelhover'
import Click from './Click'
import Hover from './Hover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Handelclick/> */}
      <hr />
      {/* <Handelhover/> */}
      <hr />
      <Click />
      <hr />
      <Hover />

    </>
  )
}

export default App

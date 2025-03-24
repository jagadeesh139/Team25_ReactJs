import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Handelclick from './Handelclick'
import Handelhover from './handelhover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Handelclick/>
    <hr />
    <Handelhover/>
     
    </>
  )
}

export default App

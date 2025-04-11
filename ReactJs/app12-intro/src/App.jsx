import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Click from '../../app9-intro/src/Click'
import Hover from '../../app9-intro/src/Hover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Click/>
    <hr />
    <Hover/>
  

    </>
  )
}

export default App

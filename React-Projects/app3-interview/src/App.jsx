import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hotelbooking from './Hotelbooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hotelbooking />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EComerce from './EComerce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EComerce/>
    </>
  )
}

export default App

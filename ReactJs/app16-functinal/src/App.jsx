import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <MyComponent/>
   </>
  )
}

export default App

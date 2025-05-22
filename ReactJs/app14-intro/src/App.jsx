import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Components/Users'
import Students from './Components/Students'
import Employes from './Components/Employes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users />
      
      <hr />
      <Students />
      <hr />
      <Employes />

    </>
  )
}

export default App

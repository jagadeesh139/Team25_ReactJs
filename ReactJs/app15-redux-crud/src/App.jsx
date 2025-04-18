import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Student from './Components/Student'
import Users from './Components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Student/> */}
    <Users/>

    </>
  )
}

export default App

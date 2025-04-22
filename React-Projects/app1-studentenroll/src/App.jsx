import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentform from './Studentform'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student />

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stdform from './Components/Stdform'
import Std from './Components/Std'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Stdform /> */}
      <Std/>
    </>
  )
}

export default App

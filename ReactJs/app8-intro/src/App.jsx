import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'
// import Renderprops from './Renderprops'
// import Renderprop from './Renderprop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Renderprops/> */}
    {/* <Renderprop/> */}
    <Props/>

    </>
  )
}

export default App

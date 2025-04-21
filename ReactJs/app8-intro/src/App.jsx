import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Props1 from './Props1'

import FunCountComponent from './Components/FunCountComponent'
import FunClickComponent from './Components/FunClickComponent'
import FunHoverComponent from './Components/FunHoverComponent'
// import Props from './Props'
// import Renderprops from './Renderprops'
// import Renderprop from './Renderprop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Renderprops/> */}
      {/* <Renderprop/> */}
      {/* <Props/> */}
     
  

      <FunCountComponent render={(count, increment, decrement, reset) => (
        <FunClickComponent count={count} increment={increment} decrement={decrement} reset={reset} />
  )} />
      <FunCountComponent render={(count, increment, decrement, reset) => (
        <FunHoverComponent count={count} increment={increment} decrement={decrement} reset={reset} />
  )} />

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Handelclick from './Handelclick'
// import Handelhover from './handelhover'
// import Click from './Click'
// import Hover from './Hover'
// import ContextAPi from './Context APi'
import MainComponent from './Context-Component/MainComponent'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      {/* <Handelclick/> */}
      
      {/* <Handelhover/> */}
      
      {/* <Click /> */}
      
      {/* <Hover /> */}
      {/* <ContextAPi/> */}
      <hr />
      <MainComponent/>

    </>
  )
}

export default App

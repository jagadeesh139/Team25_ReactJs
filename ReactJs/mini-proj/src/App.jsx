import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Quizapp from './Quizapp'
// import EComerce from './EComerce'
// import Socialmedia from './Socialmedia'
// import Taskmanagement from './Taskmanagement'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <EComerce/> */}
     {/* <Socialmedia/> */}
     {/* <Taskmanagement/> */}
     <Quizapp/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './User'
import CrudApp from './crud'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <MyComponent/>
   {/* <CrudApp/> */}
   </> 
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeForm from './Components/RecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecipeProvider>
      <div className="container" style={{ padding: "20px" }}>
        <h1>Recipe Book</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <RecipeForm/>
        </div>
      </div>
    </RecipeProvider>
      
    </>
  )
}

export default App

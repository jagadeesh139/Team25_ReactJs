
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'
import TodoApp from './TodoApp'
import { UserContext } from './UserContext'
import Profile from './Profile'
import Todolist1 from './Todolist1'
import Todoapp1 from './Todoapp1'
import SearchComponent from './Uscabk'
import Filter from './Filterusecal'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    name: 'Alice Johnson',
    email: 'alice@example.com'
  };

  return (
    <>
     <Todoapp1/> 
    {/* <Dashboard/>
    <TodoApp/>
     <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to the App</h1>
        <Profile />
      </div>
    </UserContext.Provider>
    <SearchComponent/> 
    <Filter/> */}
    </>
    
  )
}

export default App

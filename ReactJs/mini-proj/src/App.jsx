import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Moviedata from './Moviedata'
// import ET from './ET'
// import Digital from './Digital'
// import Intm from './Intm'
// import LibraryManagement from './LibraryManagement'
// import Usermanagement from './Usermanagement'
// import Quizapp from './Quizapp'
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
     {/* <Quizapp/> */}
     {/* <Usermanagement/> */}
     {/* <LibraryManagement/> */}
     {/* <Digital/> */}
     {/* <Intm/> */}
     {/* <ET/> */}
     <Moviedata/>
    </>
  )
}

export default App

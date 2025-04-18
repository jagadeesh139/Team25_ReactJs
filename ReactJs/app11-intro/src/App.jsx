import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from '../../app10-intro/src/Home'
import Overview from './Overview'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Regestration from './Regestration';
import Login from './Login';
import Dashboard from './Dashboard';
import User from './User';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* <h1>Header</h1>
        <nav>
          <Link to={''}>Header</Link>
          <Link to={'about'}>About</Link>
          <Link to={'overview'}>Overview</Link>
          <Link to={'footer'}>Footer</Link>
        </nav> */}
        <Routes>
          {/* <Route path="" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="overview" element={<Overview />} />
          <Route path="footer" element={<Footer />} /> */}
          <Route path="" element={<Regestration />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />

        </Routes>
        {/* <h1>Footer</h1> */}
      </Router>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Footer from './Footer';
import Project from './Project';
import About from './About';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav>
          <Link to={''}>Home</Link>
          <Link to={'about'}>About</Link>
          <Link to={'projects'}>Projects</Link>
          <Link to={'footer'}>Footer</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="footer" element={<Footer />} />
        </Routes>

      </Router>

    </>
  )
}

export default App

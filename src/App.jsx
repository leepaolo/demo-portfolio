import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import PortfolioData from './Pages/PortfolioData'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

export default function App() {

  const singlePortfolio = PortfolioData.map(single => {

    return (
        <div className='main--container'>
            <Portfolio 
            key={single.id}
            single={single}
            />               
        </div>
    )

})
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio"element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
   
  )
}

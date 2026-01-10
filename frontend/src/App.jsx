

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import About from './components/About/About'
import Product from './components/Product/Product'
import Pricings from './components/Pricings/Pricings'
import SupportPage from './components/Support/SupportPage'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricings" element={<Pricings/>}/>
        <Route path="/support" element={<SupportPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

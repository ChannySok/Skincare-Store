import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs';
import Service from './pages/Service'

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
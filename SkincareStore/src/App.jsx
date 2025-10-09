import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs';
import Service from './pages/Service'
import Footer from './components/Footer';
import BodyCare from './pages/BodyCare';
import SpecialProducts from './pages/SpecialProducts';
import SkincareRoutine from './pages/SkincareRoutine';
import TreatmentAndCare from './pages/TreatmentAndCare';

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

        <Route path="/product/bodycare" element={<BodyCare />} />
        <Route path="/product/specialproducts" element={<SpecialProducts />} />
        <Route path="/product/skincareroutine" element={<SkincareRoutine />} />
        <Route path="/product/treatmentandcare" element={<TreatmentAndCare />} />
      </Routes>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export default App
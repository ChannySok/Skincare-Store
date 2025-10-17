// import React from 'react'
// import { Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Contact from './pages/Contact'
// import AboutUs from './pages/AboutUs';
// import Service from './pages/Service'
// import Footer from './components/Footer';
// import BodyCare from './pages/BodyCare';
// import SpecialProducts from './pages/SpecialProducts';
// import SkincareRoutine from './pages/SkincareRoutine';
// import TreatmentAndCare from './pages/TreatmentAndCare';
// import Cart from './pages/Cart';
// import CustomerInfo from './pages/CustomerInfo';

// const App = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
      
//       <main className="flex-grow pt-16">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/service" element={<Service/>} />
//           <Route path="/contact" element={<Contact />} />

//           <Route path="/cart" element={<Cart />} />
//           <Route path="/customer-info" element={<CustomerInfo />} />

//           <Route path="/product/bodycare" element={<BodyCare />} />
//           <Route path="/product/specialproducts" element={<SpecialProducts />} />
//           <Route path="/product/skincareroutine" element={<SkincareRoutine />} />
//           <Route path="/product/treatmentandcare" element={<TreatmentAndCare />} />
//         </Routes>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default App;

// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import AuthPage from '@/pages/AuthPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import Footer from './components/Footer';
import BodyCare from './pages/BodyCare';
import SpecialProducts from './pages/SpecialProducts';
import SkincareRoutine from './pages/SkincareRoutine';
import TreatmentAndCare from './pages/TreatmentAndCare';
import Cart from './pages/Cart';
import CustomerInfo from './pages/CustomerInfo';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-cream-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/auth" replace />;
};

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {user && <Navbar />}
      
      <main className={`flex-grow ${user ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path="/service" element={<ProtectedRoute><Service /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />

          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/customer-info" element={<ProtectedRoute><CustomerInfo /></ProtectedRoute>} />

          <Route path="/product/bodycare" element={<ProtectedRoute><BodyCare /></ProtectedRoute>} />
          <Route path="/product/specialproducts" element={<ProtectedRoute><SpecialProducts /></ProtectedRoute>} />
          <Route path="/product/skincareroutine" element={<ProtectedRoute><SkincareRoutine /></ProtectedRoute>} />
          <Route path="/product/treatmentandcare" element={<ProtectedRoute><TreatmentAndCare /></ProtectedRoute>} />
        </Routes>
      </main>
      
      {user && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
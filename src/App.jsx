import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from './admin/adminPage'



const App = () => {
  return (
    // <div className=' px-4 sm:px-6 lg:px-8 md:px-7'>
    //   <ToastContainer />
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/collection" element={<Collection />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/orders" element={<Orders />} />
    //     <Route path="/place-order" element={<PlaceOrder />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/product/:productId" element={<Product />} />
    //   </Routes>
    //   <Footer />
    // </div>
    <div className='px-4 sm:px-6 lg:px-8 md:px-7'>
    <ToastContainer />
    {/* Conditionally render Navbar and Footer for non-admin routes */}
    <Routes>
      {/* Routes that require Navbar and Footer */}
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/:productId" element={<Product />} />
            </Routes>
            <Footer />
          </>
        }
      />

      {/* Admin route without Navbar and Footer */}
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </div>
  )
}

export default App
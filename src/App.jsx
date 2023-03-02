import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import OrderSummary from './components/orderSummary';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

export default function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/products' element={<Products />}>
            <Route index element={<FeaturedProducts/>} />
            <Route path='feature' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='/users' element={<Users />}>
  
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<h1>page not found</h1>} />
        
      </Routes>
    </Router>
  )
}

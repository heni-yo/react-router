import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BookTable from './components/BookTable';
import Footer from './components/Footer';
import Menue from './components/Menue';
import  './reset.css'
import  './menu.css'
import  './home.css'
import  './about.css'
import './components.css'


export default function App() {

  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menue />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bookTable' element={<BookTable />}/>

        {/* <Route path='/users' element={<Users />}>
  
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
        </Route> */}
        <Route path='*' element={<h1>page not found</h1>} />
        
      </Routes>
        <Footer/>
    </Router>
    
    
  )
}

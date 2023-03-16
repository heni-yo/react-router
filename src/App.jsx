import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BookTable from './components/BookTable';
import Footer from './components/Footer';
import Menu from './components/menu/Menu';
import  './reset.css'
import  './menu.css'
import  './home.css'
import  './about.css'
import './components.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Jap from './admin/Jap';
import { Provider } from "react-redux";
import { store } from './admin/store';

export default function App() {
  useEffect(()=>{
    AOS.init({
      offset: 200, 
      delay: 100,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false, 
      anchorPlacement: 'top-bottom' 
    });
  },[])

  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/admin' element={<Jap/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Provider store={store}><Menu /></Provider>} />
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

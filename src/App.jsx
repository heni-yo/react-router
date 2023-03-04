import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BookTable from './components/BookTable';
import Footer from './components/Footer';
import  './reset.css'
import  './menu.css'
import  './home.css'
import  './about.css'
import './components.css'

export default function App() {

  function Navigation() {
    useEffect(() => {
      document.body.style.visibility = 'visible';
    }, []);
  
    const navOpen = () => {
      const navList = document.querySelector('.nav__list');
      const navBgOverlayEl = document.querySelector('.nav__bgOverlay');
  
      navList.classList.add('show');
      navBgOverlayEl.classList.add('active');
      document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
    };
  
    const navClose = () => {
      const navList = document.querySelector('.nav__list');
      const navBgOverlayEl = document.querySelector('.nav__bgOverlay');
  
      navList.classList.remove('show');
      navBgOverlayEl.classList.remove('active');
      document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
    };
  
    return (
      <div>
        <div className="nav__icon" onClick={navOpen}></div>
        <div className="nav__close" onClick={navClose}></div>
        <div className="nav__bgOverlay" onClick={navClose}></div>
        <nav className="nav__list">
          {/* add your navigation links here */}
        </nav>
      </div>
    );
  }
  
  
  

  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bookTable' element={<BookTable />}>
            <Route index element={<Footer/>} />
        </Route>
        {/* <Route path='/users' element={<Users />}>
  
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
        </Route> */}
        <Route path='*' element={<h1>page not found</h1>} />
        
      </Routes>
    </Router>
    
    
  )
}

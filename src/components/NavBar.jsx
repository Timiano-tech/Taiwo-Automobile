import React from 'react'
import '../Styles/NavBar.css';
import { useEffect } from 'react';
import { Route } from 'react-router';
const NavBar = () => {


  useEffect(() => {
    const navEl = document.querySelector('.header_nav');
    const hamburgerEl = document.querySelector('.hamburger'); 

    hamburgerEl.addEventListener('click', () => {
      navEl.classList.toggle('nav--open');
      hamburgerEl.classList.toggle('hamburger--open')
    });

    navEl.addEventListener('click', () => {
      navEl.classList.remove('nav--open');
      hamburgerEl.classList.remove('hamburger--open')
    });   
    
  }, []);
  
  return (
   <>
         <header className="header" >
    
       

        <div className="header__logo">
            <img src="/Logo.png" alt="Logo"/>
            <h2><a href="#">T-Autos</a></h2>
            
        </div>
    
        <nav className="header_nav">
          <ul className="header_ul">
            <li><a href="#home" className="nav__link nav_link2">Home</a></li>
                <li><a href="#features" className="nav__link nav_link2">Features</a></li>
                <li><a href="#service" className="nav__link nav_link2">Services</a></li>
                <li><a href="#testimonial" className="nav__link nav_link2">Testimonial</a></li>
          </ul>
        </nav>
    
    
        <div className="hamburger hum-menu">
          <div className="hum"></div>
          <div className="hum"></div>
          <div className="hum"></div>
        </div>
      </header>
   
   </>
  )
}

export default NavBar

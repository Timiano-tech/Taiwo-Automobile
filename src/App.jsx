import React from 'react';
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx'; 
import Features from './components/Features.jsx';
import Services from './components/Services.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Features />
      <Services />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App

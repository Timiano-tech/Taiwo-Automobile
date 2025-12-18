import React from 'react'
import '../Styles/Header.css';
import Features from '../routes/Features.jsx';
import Services from '../routes/Services.jsx';
import Testimonial from '../routes/Testimonial.jsx';

const Header = () => {
  return (
    <div>
      <section className="hero" id="home">
      <div className="header__text">
        <h2>Welcome to<span className="t-autos"> T-Autos</span></h2>
        <p>Skilled and experienced automotive mechanics with passion for keeping your car running smoothly.</p>
        <a href="#message_container">Get in touch</a>
    </div>

    </section>
    <Features/>
    <Services/>
    <Testimonial/>
    </div>
  )
}

export default Header

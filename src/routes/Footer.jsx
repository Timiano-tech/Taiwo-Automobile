import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <>
      <section className="footer" id="contact">
    <div className="footer-text">
        <h2>
         Visit us today
        </h2>
     </div>
     <div className="footer__row">
        <div className="footer__left">
            <h1>Opening Hours</h1>
            
            <p> <i className='bx bx-time-five'></i>Monday to Friday - 9am to 9pm
            </p>
            <p> <i className='bx bx-time-five'></i> Saturday - 9am to 6pm
            </p>
            
        </div>
        <div className="footer__right">
            <h1>Get in Touch</h1>
            <p>Charly Boy, Gbagada, Lagos. <i className='bx bx-current-location'></i> </p>
            <p> abeltaiwo20@gmail.com <i className='bx bx-envelope'></i></p>
            <p>08057580290, 08055529477, 07051370925<i className='bx bxs-phone-call'></i></p>
        </div>

        
     </div>

     <div className="social__logo">
        <i className='bx bxl-facebook' ></i>
        <i className='bx bxl-whatsapp' ></i>
        <i className='bx bxl-instagram' ></i>
        <i className='bx bxl-youtube' ></i>

    </div>
    <hr className="footer__hr"/>

    <h4> Copyright 2025 &copy; Timiano.dev. All Right Reserved </h4>

</section>
    </>
  )
}

export default Footer

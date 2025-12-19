import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {


  
  return (
   <>
      <header className="header" >

        <div className="header__logo">
          <img src="/Logo.png" alt="Logo"/>
          <Link to="/" className="nav__link">
            T-Autos
          </Link>
        </div>
    
        <nav className="header_nav">
          <ul className="header_ul">
            <li><Link to="/" className="nav__link nav_link2">Home</Link></li>
                <li><Link to="/features" className="nav__link nav_link2">Features</Link></li>
                <li><Link to="/service" className="nav__link nav_link2">Services</Link></li>
                <li><Link to="/testimonial" className="nav__link nav_link2">Testimonial</Link></li>
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

import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Header from './routes/Header.jsx'; 
import Features from './routes/Features.jsx';
import Services from './routes/Services.jsx';
import Testimonial from './routes/Testimonial.jsx';
import Footer from './routes/Footer.jsx';



const App = () => {
  return (
    <>
        <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/features" element={<Features />} />
        <Route path="/service" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </>
  )
}

export default App

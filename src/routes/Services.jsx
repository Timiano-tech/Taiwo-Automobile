import '../Styles/Services.css';
import audi from '../assets/audi.png';
import volkswagen from '../assets/volkswagen.png';
import skoda from '../assets/skoda.png';
import toyota from '../assets/toyota.png';
import honda from '../assets/honda.png';
import benz from '../assets/mercedes.png';


const Services = () => {

  return (
    <div>
      <section className="services" id="service">
        <div className="title-text">
            <p className="text">
                SERVICES
            </p>
            <h2 id="#features">
                What we Offer
            </h2>
         </div>

            <div className="service__box js-service-box">
            </div>

            <div className="specialized">
                <h3>We Specialize in</h3>
                <div className="car__logos">
                    <img src={audi} alt="Audi" loading="lazy" />
                    <img src={volkswagen} alt="Volkswagon" loading="lazy" />
                    <img src={skoda} alt="Škoda" loading="lazy" />
                    <img src={toyota} alt="Toyota" loading="lazy" />
                    <img src={honda} alt="Honda" loading="lazy" />
                    <img src={benz} alt="Benz" loading="lazy" />
                </div>
            </div>

    
    </section>
    </div>
  )
}

export default Services

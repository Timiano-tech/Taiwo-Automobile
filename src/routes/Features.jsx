import '../Styles/Features.css';
import Taiwo from '../assets/Taiwo.jpg';

const Features = () => {
  return (
    <div>
      <section className="Features" id="features">
        <div className="title-text">
            <p className="text" id="#features">
                FEATURES
            </p>
            <h2>
                Why Choose Us
            </h2>

        </div>
        <div className="feauture-box" >
            <div className="feauture__title">
                <h2>Expert Technician</h2>
                <div className="features__description">
                    <div className="features__icon"><i className='bx bxs-car-mechanic'></i></div>
                    <div className="features__text">
                        <p>Our team is highly trained and stays updated with the latest automotive technologies and repair techniques.
                        </p>
                        </div>
                </div>
                <h2>Quality Workmanship</h2>
                <div className="features__description">
                    <div className="features__icon"><i className='bx bxs-wrench'></i></div>
                    <div className="features__text">
                        <p>We use only the best tools, equipment, and parts to ensure your vehicle receives the hightest standard care.
                        </p>
                        </div>
                </div>
                <h2>Customer-Centric Approach</h2>
                <div className="features__description">
                    <div className="features__icon"><i className='bx bx-support'></i></div>
                    <div className="features__text">
                        <p>Your satisfaction is our priority. we listen to your concerns, explain your options, and work with you to find the best solution.
                        </p>
                        </div>
                </div>
            </div>
            <div className="feauture__img">
                <img src={Taiwo} alt="man fixing his car" loading="lazy" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Features

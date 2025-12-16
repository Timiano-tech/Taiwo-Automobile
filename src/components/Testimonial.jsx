import React from 'react'
import '../Styles/Testimonial.css'
const Testimonial = () => {
  return (
    <div>
      <section className="testimonial" id="testimonial">
        <div className="title-text">
            <p className="text">
                TESTIMONIAL
            </p>
            <h2 id="#features">
               What our Client says
            </h2>
         </div>



         <div className="testimonial__row">
            <div className="testimonial__column">
                <div className="user">
                    <img src="img/images.png" alt="car" loading="lazy"/>
                    <div className="user__info">
                        Engr. Ajifowora Stephen
                    </div>
                </div>
               
                <p>
                    I brought my car in for a checkup after hearing some unusual noises, and I was blown away by the level of service I received. The mechanics took the time to explain the issue, provided a clear breakdown of costs, and got the job done faster than I expected. My car now runs smoother than ever, and I truly appreciate their honesty and expertise. It's rare to find a shop that genuinely cares about its customers, but this team exceeded all expectations. I won't take my car anywhere else
              </p>
            </div>
            <div className="testimonial__column">
                <div className="user">
                    <img src="img/images.png" alt="car" loading="lazy"/>
                    <div className="user__info">
                        Adebola Michael
                    </div>
                </div>
                <p>
                    I can't recommend this shop enough! From the moment I walked in, I was greeted with professionalism and warmth. They thoroughly inspected my car and provided a detailed explanation of the necessary repairs. No up selling, no hidden fees—just honest, high-quality service. The team even gave me tips on how to maintain my car better to prevent future issues. Finding a trustworthy mechanic is hard, but I've finally found mine.
            </p>
            </div>
            <div className="testimonial__column">
                <div className="user">
                    <img src="img/images.png" alt="car" loading="lazy"/>
                    <div className="user__info">
                        Engr. Aina Bolaji
                    </div>
                </div>
                <p>
                    Absolutely outstanding service! I had an urgent issue with my brakes and needed immediate attention. Despite their busy schedule, they managed to fit me in and fix the problem the same day. The mechanics were knowledgeable, efficient, and extremely courteous. The pricing was reasonable, and there were no surprises when it came time to pay. It's refreshing to deal with a repair shop that values honesty and customer satisfaction. I'll be bringing all my vehicles here from now on!
            </p>
            </div>
         </div>



         <div id="message_container">
            <form action="https://api.web3forms.com/submit" method="POST" className="form">
                <h2>Get in touch</h2>
                <hr/>
                <input type="hidden" name="access_key" value="401492cf-6a64-4a7e-bf3b-b08fc4f3895c"/>
                <input type="text" name="name" placeholder="Your Name" id="name" className="input" required/>
                <input type="email" name="email" placeholder="Email" id="email" className="input" required/>
                <textarea name="message" className="input area" placeholder="Your Message" required></textarea>
                <button type="submit" className="button submit-btn">Submit</button>
            </form>
         </div>
        </section>
    </div>
  )
}

export default Testimonial

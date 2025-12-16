    import BrakeImage from '../assets/Brake.jpg';
    import GearImage from '../assets/Gear.jpg';
    import EngineImage from '../assets/Engine.jpg';
    import TransmissionImage from '../assets/Transmission.jpg';
    
    
    const service = [{
  image: {BrakeImage},
  alt: 'Repairing Brake pad',
  heading3: 'Brake Service',
  paragraph: 'Your safety is our priority. We must ensure your braking system is functioning flawlessly'
}, {
  image: {GearImage},
  alt: 'Fixing gear',
  heading3: 'Gear Repair',
  paragraph: 'Fix and maintain your vehicle’s gear system, including manual transmission repairs, gear shifting issues, and differential services to ensure smooth performance and operation.'
},
{
  image: {EngineImage},
  alt: 'Fixing Motocycle',
  heading3: 'Engine Diagnostics & Repair',
  paragraph: ' Identify and repair engine problems using advanced diagnostics to ensure your engine runs efficiently and reliably.'
},
{
  image: {TransmissionImage},
  alt: 'fixing transmission',
  heading3: 'Transmission Services',
  paragraph: 'Keep your transmission in top condition with fluid changes, diagnostic checks, and repairs to avoid costly breakdowns.'
} ];



let serviceOutput = '';

service.forEach((service) => {
  serviceOutput += `     <div class="single__service">
                    <img src="${service.image}" alt="${service.alt}" loading="lazy">
                    <div class="overlay"></div>
                    <div class="service__desc">
                        <h3>${service.heading3}</h3>
                        <hr>
                        <p class="service__p">
                            ${service.paragraph}</p>
                    </div>
                </div>`
});
console.log(serviceOutput);

document.querySelector('.js-service-box').innerHTML = serviceOutput;
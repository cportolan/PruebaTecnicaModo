import '../styles/Services.css'
import ServCard from './Cards/ServCards'
import svg1 from '../assets/svgs/1.svg'
import svg2 from '../assets/svgs/2.svg'
import svg3 from '../assets/svgs/3.svg'

export default function Services() {

    const cardTexts = [
        {
            title: "Business & Product Concept", 
            text: "Analyse business and product concepts at Start-up Workshops or Ongoing Projects Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.",
            svg: svg1
        }, 
        {
            title: "Web & Mobile Development",
            text: "Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
            svg: svg2
        }, 
        {
            title: "UX & UI Design",
            text: "Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.",
            svg: svg3
        }
    ];

    return(
        <section className="services" id="services">
            <div className="services-container">
                <div className="services-text">
                    <h2 className='services-title'>Our Services</h2>
                    <p className="services-subtitle">We feel very strong about our skills when it comes to planning, designing and coding applications. Here is what we love to do!</p>
                </div>
                <div className="services-cards">
                    {cardTexts.map((card, index) => (
                        <ServCard 
                            key={index}
                            svg={card.svg}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
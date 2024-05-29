import '../styles/Clients.css'

import tnwImg from '../assets/clients/tnw.png'
import googleImg from '../assets/clients/google.png'
import nikeImg from '../assets/clients/nike.png'
import airbnbImg from '../assets/clients/airbnb.png'
import ClientCard from './Cards/ClientCard'

export default function Clients() {
    const imgClients = [tnwImg, googleImg, nikeImg, airbnbImg];
    const cardClientsTexts = [
        {
            title: "Get in touch with us", 
            text: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
            button: "Hire us"
        }, 
        {
            title: "Our Projects",
            text: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
            button: "See Projects"
        }, 
    ];

    return(
        <section className="clients" id='case-studies'>
            <div className="clients-container">
                <h3 className="clients-title">CLIENTS WE WORKED WITH</h3>
                <div className="clients-imgs">
                    {imgClients.map((img, index) => {
                        return <img src={img} alt={`tech-${index}`} key={index} />
                    })}
                </div>
                <div className="clients-cards">
                    {cardClientsTexts.map((card, index) => (
                        <ClientCard
                            key={index}
                            title={card.title}
                            text={card.text}
                            button={card.button}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
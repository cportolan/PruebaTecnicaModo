import '../../styles/Cards/ServCards.css'

const ServCard = ({svg, title, text}) => {
    return(
        <div className="servcard">
            <div className="servcard-container">
                <div className="servcard-img">
                    <img src={svg} alt="SVG Card" className='servcard-svg'/>
                </div>
                <h3 className='servcard-title'>{title}</h3>
                <p className='servcard-text'>{text}</p>
                <a href="#" className='servcard-link'>Learn More</a>
            </div>
        </div>
    )
}

export default ServCard;
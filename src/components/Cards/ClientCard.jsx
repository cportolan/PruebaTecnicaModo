import '../../styles/Cards/ClientCard.css'

const ClientCard = ({title, text, button}) => {
    return(
        <div className="clientcard">
            <div className="clientcard-container">
                <h3 className="clientcard-title">{title}</h3>
                <p className="clientcard-text">{text}</p>
                <a href="#" className="clientcard-button">{button}</a>
            </div>
        </div>
    )
}

export default ClientCard;
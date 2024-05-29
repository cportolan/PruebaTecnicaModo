import '../styles/Footer.css'

export default function Footer() {
    return(
        <footer className="footer" id='about'>
            <div className="footer-container">
                <div className="footer-left">
                    <h2>compleet labs</h2>
                    <p>Acá dejo mis redes sociales, esero que te haya gustado la prueba técnica, si me quieres enviar un mensaje contáctame!</p>
                    <div className="footer-socialmedia">
                        <a href="https://instagram.com/cristianportolan" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com/in/cristian-portolan" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/cportolan/" target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-sitemap">
                        <p>SITEMAP</p>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#technology">Technology</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-casestudies">
                        <p>CASE STUDIES</p>
                        <ul className="footer-casestudie">
                            <li><a href="https://swiss.com/" target="_blank">Swiss Airlines</a></li>
                            <li><a href="https://google.com/" target="_blank">Google</a></li>
                            <li><a href="https://apple.com/" target="_blank">Apple</a></li>
                            <li><a href="https://nike.com/" target="_blank">Nike</a></li>
                        </ul>
                    </div>
                    <div className="footer-contacts">
                        <p>CONTACT</p>
                        <ul className="footer-contact">
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Hire Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
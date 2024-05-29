import '../styles/Footer.css'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2>compleet labs</h2>
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullampcorper nulla.</p>
                    <div className="footer-socialmedia">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
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
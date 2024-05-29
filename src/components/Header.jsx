import '../styles/Header.css'
import { useState, useEffect } from 'react';

export default function Header() {
    const links = ['Home', 'Services', 'Technology', 'Case studies', 'About'];
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    let currentSection = '';
    const [menuOpen, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        setOpen(!menuOpen);
        setActive(!active);
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 50) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            console.log(currentSection);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <header className={scrolled ? 'header scrolled' : 'header'}>
            <div className="header-container">
                <a className='header-logo' href="#home">compleet labs</a>
                <nav className="header-navbar">
                    <ul>
                    {links.map((link, index) => {
                            const linkId = link.toLowerCase().replace(/ /g, '-');
                            return (
                                <li key={index}>
                                    <a 
                                        href={`#${linkId}`} 
                                        className={activeSection === linkId ? 'active' : ''}
                                    >
                                        {link}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <a className='header-contact' href="#contact">Hire Us</a>
                </nav>
            </div>
        </header>
    )
}
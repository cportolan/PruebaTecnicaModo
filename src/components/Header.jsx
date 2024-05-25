import '../styles/Header.css'
import { useState, useEffect } from 'react';

export default function Header() {
    const links = ['Home', 'Services', 'Technology', 'Case studies', 'About'];
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

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
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <header className="header">
            <div className="header-container">
                <a className='header-logo' href="#home">compleet labs</a>
                <nav className="header-navbar">
                    <ul>{links.map((link, index) => (
                        <li key={index}>
                            <a href={`#${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a>
                        </li>
                    ))}</ul>
                    <a className='header-contact' href="#contact">Hire Us</a>
                </nav>
            </div>
        </header>
    )
}
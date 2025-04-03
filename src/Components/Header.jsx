import devjane from "../images/devjane.png";
import { useLockBodyScroll } from "react-use";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header({ on, toggle }) {
    useLockBodyScroll(on);
    const navigate = useNavigate();
    const location = useLocation();

    // Function to navigate home and scroll to section
    function handleNavigation(e, section) {
        e.preventDefault(); // Prevent default anchor behavior

        if (location.pathname !== "/") {
            navigate("/"); 
            setTimeout(() => scrollToSection(section), 100);
        } else {
            scrollToSection(section); 
        }

        toggle();
    }

    function scrollToSection(section) {
        const target = document.getElementById(section);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header>
            <div className="logo">
                <img src={devjane} alt="" />
            </div>
            <button className={`nav-toggle ${on ? "nav-open" : ""}`} onClick={toggle} aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className={`nav ${on ? "nav-open" : ""}`}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link" onClick={(e) => handleNavigation(e, "home")}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link" onClick={(e) => handleNavigation(e, "services")}>My Services</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link" onClick={(e) => handleNavigation(e, "about")}>About me</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link" onClick={(e) => handleNavigation(e, "work")}>My Work</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

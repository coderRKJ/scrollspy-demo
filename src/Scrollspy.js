import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';

function Scrollspy() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["section1", "section2"];

            setActiveSection(sections.find(section => 
                document.getElementById(section).getBoundingClientRect().bottom > 56
            ))
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={activeSection === "section1" ? "active" : ""}
                    >
                        Section 1
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={activeSection === "section2" ? "active" : ""}
                    >
                        Section 2
                    </Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
}

export default Scrollspy;

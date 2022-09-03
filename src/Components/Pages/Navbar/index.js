import React from "react";
import {Link} from "react-router-dom";

import './Navbar.css';

function NavBar (){ 
    return (
    <nav className = "navbar">
        <ul id = "nav">
            <li className = "mx-5">
                <Link to = "/AboutMe">AboutMe</Link>
            </li>
            <li className = "mx-5">
                <Link to = "/Portfolio">Portfolio</Link>
            </li>
            <li className = "mx-5">
                <Link to = "/Contact">Contact</Link>
            </li>
            <li className ="mx-5">
                <Link to = "/Experience">Experience</Link>
            </li>
        </ul>
    </nav>
)};

export default NavBar;
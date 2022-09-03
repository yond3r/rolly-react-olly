import React from "react";
import {Link} from "react-router-dom";

function NavBar (){ 
    return (
    <nav className = "navbar">
        <ul className="flex-row">
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
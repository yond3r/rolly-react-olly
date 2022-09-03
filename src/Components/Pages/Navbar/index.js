import React from "react";
import {Link} from "react-router-dom";

function NavBar (){ 
    return (
    <nav className = "navbar">
        <ul className="flex-row">
            <li className = "mx-5">
                <Link to = "/AboutMe"></Link>
            </li>
            <li className = "mx-5">
                <Link to = "/Portfolio"></Link>
            </li>
            <li className = "mx-5">
                <Link to = "/Contact"></Link>
            </li>
        </ul>
    </nav>
)};

export default NavBar;
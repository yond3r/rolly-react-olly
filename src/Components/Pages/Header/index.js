import React from 'react';

import {Link} from "react-router-dom";

import NavBar from "../Navbar";

function Header(){
    return (
        <header className="flex-row px-4">
            <div className='me'>
                <h1>
                    J.M.B.
                </h1>
            </div>
            <NavBar></NavBar>
        </header>
    )};

export default Header;

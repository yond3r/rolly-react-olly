import React from 'react';

import {Link} from "react-router-dom";

import Navbar from "../Navbar";

function Header(){
    return (
        <header className="flex-row px-4">
            <div className='me'>
                <h1>
                    <Link to="/">J.M.B.</Link>
                </h1>
            </div>
            <Navbar></Navbar>
        </header>
    )};

export default Header;

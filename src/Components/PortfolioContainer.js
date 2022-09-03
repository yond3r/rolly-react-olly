import React, { useState } from 'react';

import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact/contact'
import Experience from './Pages/Experience'
import Portfolio from './Pages/Portfolio'
import Footer from './Pages/Footer'
import Header from'./Pages/Header'
import Navbar from'./Pages/Navbar'
// import Home from './Component/home/'

export default function PortfolioContainer(){
    // const [currentPage, setCurrentPage] = useState('home');

    // const renderPage = () => {
    //     if (currentPage === 'AboutMe'){
    //         return <AboutMe />
    //     }
    //     if (currentPage === 'Contact'){
    //         return <Contact />
    //     }
    //     if (currentPage === 'Experience'){
    //         return <Experience />
    //     }
    //     if (currentPage === 'Footer'){
    //         return <Footer />
    //     }
    //     if (currentPage === 'Header'){
    //         return <Header />
    //     }
    //     if (currentPage === 'Navbar'){
    //         return <Navbar />
    //     }
    //     if (currentPage === 'Portfolio'){
    //         return <Portfolio />
    //     };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <PortfolioContainer currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
)};
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//all files 
import AboutMe from './Components/Pages/AboutMe'
import Contact from './Components/Pages/Contact'
import Experience from './Components/Pages/Experience'
import Portfolio from './Components/Pages/Portfolio'
import Footer from './Components/Pages/Footer'
import Header from './Components/Pages/Header'
import Navbar from './Components/Pages/Navbar'

function App(){
        return (
            <Router>
            <div className='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<AboutMe/>} />
                    <Route path="/AboutMe" element={<AboutMe/>} />
                    <Route path="/Navbar" element={<Navbar/>} />
                    <Route path="/Contact" element={<Contact/>} />
                    <Route path="/Experience" element={<Experience/>} />
                    <Route path="/Portfolio" element={<Portfolio/>} />
                    <Route path="*" element = {<AboutMe/>}/>
                </Routes>
                <Footer></Footer>
            </div>
        </Router>
        )
    }

export default App;

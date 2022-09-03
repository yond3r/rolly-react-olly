import React from 'react'

import './AboutMe.css'
import '../images/transparentMe.png';

function AboutMe() {
    return (
    <div>
        <section class= "about">
            <h1>Howdy, I'm Jovi!</h1>
                <h2>I'm a designer and full-stack developer.</h2>
                <img src={require('../images/transparentMe.png')} />
            <ul id = "mini-bio">
              <li id = "minis">Texas-based</li>
              <li id = "minis">Current Student @ Olympic College and UTD</li>
              <li id = "minis">While my heart lies with illustrator, I've found my niche within programming </li>
            </ul>
        </section>


{/* will add links later!! I don't have any art/design accounts yet, and I need to set up Professional Ones for developer things, so I thought I would just make a two-for-one, and I will have to update that as needed when class is over. */}
        <section class = "apps">
            <ul id = "socials">
                <li id = "socials">&#9734;Kofi&#9734;</li> 
                <li id = "socials">&#9734;Instagram&#9734;</li>
                <li id = "socials">&#9734;Twitter&#9734;</li>
                <li id = "socials">&#9734;LinkedIn&#9734;</li>
            </ul>  
        </section>
    </div>
    )};

export default AboutMe;
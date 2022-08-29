import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>The Skills I've Learned</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className='experience__frontend'>
                    <div className="experience__content">
                        <article className="experience__details"></article>
                        <h4>HTML</h4>
                        <h4>CSS</h4>
                        <h4>Bootstrap</h4>
                        <h4>Tailwind</h4>
                        <h4>React</h4>
                    </div>
                </div>
            </div>

            <div className="experience__backend">
                <h3>Backend Development</h3>
                <div className="expierence__content">
                    <article className='experience__details'>
                        <h4>Node JS</h4>
                        <h4>MongoDB</h4>
                        <h4>MySQL</h4>
                        <h4>NoSQL</h4>
                    </article>
                </div>
            </div>
        </section>
    )};

export default Experience;
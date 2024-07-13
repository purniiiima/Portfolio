import React from 'react';
import './About.css';
import profilePicture from '../assets/Profile3.jpg'; 

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-text">
                <h1 className='greet'>Hello, I'm</h1>
                <p className='name'>Purnima</p>
                <p className='name'>Baroi</p>
                <div className="about-content">
                    <h4>Membership Coordinator @FST Outreach Club </h4>
                    <h4>Pursuing B.Tech(CS)'27 @StarexUniversity</h4>
                    <h4>Full Stack Developer</h4>
                    <h4>JavaScript | ReactJs | MongoDB | Java | Python | Flask</h4>
                </div>
            </div>
            <div className="profile-picture-container">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
            </div>
        </section>
    );
};

export default About;

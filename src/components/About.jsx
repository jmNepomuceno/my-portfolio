import React from 'react';
import resume from '../docx/resume_nepomuceno_updated.pdf'
function About() {
    const window_width = window.innerWidth
    let display = (window_width <= 770) ? "none" : "flex"
    return (
        <div className='about-div' id="about-id">
            <section>
                <h2>About Me</h2>
                <hr/>
                <p>
                    <span>I'm a </span>computer science student, with the skill of developing websites using React as the framework for creating front-end designs and node.js for back-end services. 
                    <br/>
                    <br/>
                    <span>I </span> used most of my time and passion in creating websites, whether it's personal or project-based websites.
                    <br/>
                    <br/>
                    <span>I'm</span> looking forward to using and enhancing my skills in the field of full-stack development.
                </p>
                <div id="medias-div">
                    <a href={resume}><button id="resume-btn">Resume</button></a>
                </div>
            </section>

            <img style={{display:display}} id="about-img" src={require('../imgs/about_me.png')} alt="about-me-img" />
            
        </div>
    );
}

export default About;
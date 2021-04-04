import React from 'react';
import mikefogz from '../Assets/mikefogz_smx_150.jpg';
import github from '../Assets/GitHub-Mark-64px.png';
import linkedin from '../Assets/linkedin.png';
import pdf from '../Assets/pdf-file.png';
import './Home.css';

function Home() {
    return (
        <div className="container bg-info">
            <div className="row">
                <div className="col-sm-8 card">
                    <div className="page-header">
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                        <img
                            src={mikefogz}
                            alt="MikeFogz_smx"
                            className="about-img"
                        />
                        <p>
                            Hi, I'm <strong>Mike</strong>! I'm a Bay Area native that's recently returned to Oakland after an extended stay down in San Diego followed by San Luis Obispo for school and advancing my career in the Digital Marketing & Craft Beer industries. 
                        </p>
                        <p>Over the years my career has taken me into SEO, Social Media, Customer Success, and more traditional forms of Marketing. I've had the pleasure to work for large & small agencies, breweries, and in-house.  Always looking for that perfect fit where skill, passion, & team are in sync. </p>
                        <p>Throughout my time as a digital marketer I've worked with, and been exposed to, coding. The problem solving and hard skills it requires always interested me.  As I found myself with extra time on my hands in 2020 and wanting to shift my career, I thought I'd finally take the plunge into learning coding. </p>
                        <p>As a student in UC Berkeley's Full Stack Web Dev Bootcamp I aim to gain the skills and mindset necessary to succeed as a developer.</p>
                        <p>Note: This portfolio will be an on going project as I continue on my coding journey.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-3 card contact">
                    <h1>Contact Me</h1>
                    <p>Mike Fogarty</p>
                    <ul>
                        <li>925-683-2025</li>
                        <li>mikefogz@gmail.com</li>
                        <li>@MikeFogz</li>
                    </ul>
                    <h6>Connect & view my work:</h6>
                    <div className="row contact">
                        <a href="https://github.com/MikeFogz" target="_blank">
                            <img className="icons" src={github} alt="GitHub-Mark-64px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/mikefogz/" target="_blank">
                            <img className="icons" src={linkedin} alt="linkedin-icon"/>
                        </a>
                    </div>
                    <div className="row contact">
                        <a href="https://docs.google.com/document/d/13opxgMsA2yWkHjmS0SvK_ehHBlDVsKnrl8WgNgFI0TU/edit?usp=sharing" target="_blank">
                            <img className="icons" src={pdf} alt="resume-pdf"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

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
                            Hi, I'm Mike Fogarty, a recent graduate from UC Berkeley's Full Stack Web Dev Bootcamp. 
                            While I learn code I will continue to update this portfolio site. I plan to refactor as I progress in my bootcamp and may start a fresh portfolio upon completion.
                        </p>
                        <p>
                            Feel free to connect with me or view more of my work here: 
                        </p>
                        <a href="https://github.com/MikeFogz" target="_blank">
                            <img className="icons" src={github} alt="GitHub-Mark-64px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/mikefogz/" target="_blank">
                            <img className="icons" src={linkedin} alt="linkedin-icon"/>
                        </a>
                        <a href="https://docs.google.com/document/d/13opxgMsA2yWkHjmS0SvK_ehHBlDVsKnrl8WgNgFI0TU/edit?usp=sharing" target="_blank">
                            <img className="icons" src={pdf} alt="resume-pdf"/>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 card">
                    <h1>Contact Info</h1>
                </div>
            </div>
        </div>
    )
}

export default Home

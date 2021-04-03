import React from 'react'


function Home() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-sm-12">
                <div class="page-header">
                    <h1>About Me</h1>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                    <img
                        src="../Assets/mikefogz_smx_150.jpg"
                        alt="MikeFogz_smx"
                        class="about-img"
                    />
                    <p>
                        Hi, I'm Mike Fogarty, a coding student in UC Berkeley's Full
                        Stack Bootcamp. While I learn code I will continue to update this portfolio site. I plan to refactor as I progress in my bootcamp and may start a fresh portfolio upon completion.
                    </p>
                    <p>
                        Feel free to connect with me or view more of my work here: 
                    </p>
                    <a href="https://github.com/MikeFogz" target="_blank">
                        <img class="icons" src="../Assets/GitHub-Mark-64px.png" alt="GitHub-Mark-64px"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mikefogz/" target="_blank">
                        <img class="icons" src="../Assets/linkedin.png" alt="linkedin-icon"/>
                    </a>
                    <a href="https://docs.google.com/document/d/13opxgMsA2yWkHjmS0SvK_ehHBlDVsKnrl8WgNgFI0TU/edit?usp=sharing" target="_blank">
                        <img class="icons" src="../Assets/pdf-file.png" alt="resume-pdf"/>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home

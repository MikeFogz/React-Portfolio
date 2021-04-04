import React from 'react';
import greenhaus from '../../Assets/greenhaus_homepage.png'
import './Highlight.css'

function Highlight() {
    return (
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <a href="https://github.com/MikeFogz/Greenhaus" target="_blank">
                        <img
                        src={greenhaus}
                        alt="GreenHaus screenshot"
                        className="portfolio-img"
                        />
                    </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2 className="portfolio-text">Highlight Project: GreenHaus</h2>
                    <p className="portfolio-text">
                    My 2nd group project and first full stack application with CRUD functionality.  GreenHaus is a plant care app. It allows users to track plants they have, upload pictures of them, update when they last watered them, and leave notes on plant care. Future functionality to include connecting to Trefle api for detailed plant information, user login functionality, gif creation of images uploaded with gifencoder npm, and the ability to ask question/leave comments from other users.
                    </p>
                    <a href="https://github.com/MikeFogz/Greenhaus" target="_blank">
                    <p className="description-text">GitHub Repo</p>
                    </a>
                    <a href="https://vast-escarpment-39602.herokuapp.com/" target="_blank">
                    <p className="description-text">Deployed Heroku Page</p>
                    </a>
                </div>
            </div>
    )
}

export default Highlight

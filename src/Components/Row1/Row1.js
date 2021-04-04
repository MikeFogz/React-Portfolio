import React from 'react';
import couch from '../../Assets/CouchOrCovidScreenShot200x175.png'
import planner from '../../Assets/DayPlanner200x175.png'

function Row1() {
    return (
        <div className="row">

        <div className="col-sm-6 col-md-6 col-lg-6">
          <h3 className="portfolio-text">Group Project: Couch or Covid</h3>
          <a href="https://github.com/MikeFogz/API-Project1" target="_blank">
            <p className="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz.github.io/API-Project1/" target="_blank">
            <p className="description-text">Deployed Page</p>
          </a>
          <a href="https://github.com/MikeFogz/API-Project1" target="_blank">
            <img
            src={couch}
            alt="API Project 1"
            className="portfolio-img"
            />
          </a>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <h3 className="portfolio-text">Day Planner</h3>
          <a href="https://github.com/MikeFogz/DayPlanner" target="_blank">
            <p className="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz.github.io/DayPlanner/" target="_blank">
            <p className="description-text">Deployed Page</p>
          </a>
          <a href="https://github.com/MikeFogz/DayPlanner" target="_blank">
            <img
            src={planner}
            alt="Day Planner"
            className="portfolio-img"
            />
          </a>
        </div>
      </div>
    )
}

export default Row1

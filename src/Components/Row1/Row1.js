import React from 'react'

function Row1() {
    return (
        <div class="row">

        <div class="col-sm-6 col-md-6 col-lg-6">
          <h3 class="portfolio-text">Group Project: Couch or Covid</h3>
          <a href="https://github.com/MikeFogz/API-Project1" target="_blank">
            <p class="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz.github.io/API-Project1/" target="_blank">
            <p class="description-text">Deployed Page</p>
          </a>
          <a href="https://github.com/MikeFogz/API-Project1" target="_blank">
            <img
            src="../Assets/CouchOrCovidScreenShot200x175.png"
            alt="API Project 1"
            class="portfolio-img"
            />
          </a>
        </div>

        <div class="col-sm-6 col-md-6 col-lg-6">
          <h3 class="portfolio-text">Day Planner</h3>
          <a href="https://github.com/MikeFogz/DayPlanner" target="_blank">
            <p class="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz.github.io/DayPlanner/" target="_blank">
            <p class="description-text">Deployed Page</p>
          </a>
          <a href="https://github.com/MikeFogz/DayPlanner" target="_blank">
            <img
            src="../Assets/DayPlanner200x175.png"
            alt="Day Planner"
            class="portfolio-img"
            />
          </a>
        </div>
      </div>
    )
}

export default Row1

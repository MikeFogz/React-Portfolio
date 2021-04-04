import React from 'react'
import burger from "../../Assets/eat-da-burger200x118.png"
import password from "../../Assets/PasswordGenerator200x163.png"
import './Row2.css'

function Row2() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <h3 className="portfolio-text">Password Generator</h3>
          <a href="https://github.com/MikeFogz/PasswordGenerator" target="_blank">
            <p className="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz.github.io/PasswordGenerator/" target="_blank">
            <p className="description-text">Deployed Page</p>
          </a>
          <a href="https://github.com/MikeFogz/PasswordGenerator" target="_blank">
            <img
            src={password}
            alt="Password Generator"
            className="portfolio-img"
            />
          </a>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <h3 className="portfolio-text">Eat Da Burger</h3>
          <a href="https://github.com/MikeFogz/burger" target="_blank">
            <p className="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz-eatdaburger.herokuapp.com/" target="_blank">
            <p className="description-text">Deployed Page</p>
          </a>
          <img
            src={burger}
            alt="Portfolio Placeholder 5"
            className="portfolio-img"
          />
        </div>
      </div>  
    )
}

export default Row2

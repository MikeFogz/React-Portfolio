import React from 'react'
// import burger from "../../Assets/eat-da-burger200x118.png"
// import password from "../../Assets/PasswordGenerator200x163.png"

function Row2() {
    return (
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6">
          <h3 class="portfolio-text">Password Generator</h3>
          <a href="https://github.com/MikeFogz/PasswordGenerator" target="_blank">
            <p class="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz.github.io/PasswordGenerator/" target="_blank">
            <p class="description-text">Deployed Page</p>
          </a>
          <a href="https://github.com/MikeFogz/PasswordGenerator" target="_blank">
            <img
            // src={password}
            alt="Password Generator"
            class="portfolio-img"
            />
          </a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <h3 class="portfolio-text">Eat Da Burger</h3>
          <a href="https://github.com/MikeFogz/burger" target="_blank">
            <p class="description-text">GitHub Repo</p>
          </a>
          <a href="https://mikefogz-eatdaburger.herokuapp.com/" target="_blank">
            <p class="description-text">Deployed Page</p>
          </a>
          <img
            // src={burger}
            alt="Portfolio Placeholder 5"
            class="portfolio-img"
          />
        </div>
      </div>  
    )
}

export default Row2

import React from 'react'

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
            src="../Assets/PasswordGenerator200x163.png"
            alt="Password Generator"
            class="portfolio-img"
            />
          </a>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <h3 class="portfolio-text">Placeholder 5</h3>
          <img
            src="http://placehold.it/200x200"
            alt="Portfolio Placeholder 5"
            class="portfolio-img"
          />
        </div>
      </div>  
    )
}

export default Row2

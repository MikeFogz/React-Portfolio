import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <span className="navbar-brand mb-1 h1">Mike Fogarty</span>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <Link to="/">
                            <a className="nav-link" href="index.html">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio">
                            <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </Link>
                        
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
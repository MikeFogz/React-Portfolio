import React from 'react'
import Highlight from '../Components/Highlight/Highlight'
import Row1 from '../Components/Row1/Row1'
import Row2 from '../Components/Row2/Row2'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className="container bg-info" id="port-container">
            <div className="card">
                <h1 className="portfolio">My Portfolio</h1>
                    <Highlight/>
                    <Row1/>
                    <Row2/>
            </div>

        </div>
    )
}

export default Portfolio

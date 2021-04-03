import React from 'react'
import Highlight from '../Components/Highlight/Highlight'
import Row1 from '../Components/Row1/Row1'
import Row2 from '../Components/Row2/Row2'

function Portfolio() {
    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
                <Highlight/>
                <Row1/>
                <Row2/>
        </div>
    )
}

export default Portfolio

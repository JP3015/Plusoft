import React from 'react'
import BannerAbout from '../../src/images/about/about-header.jpg'
import Member1 from '../../src/images/about/team1.jpg'
import Member2 from '../../src/images/about/team2.jpg'
import Member3 from '../../src/images/about/team3.jpg'

export default function About() {
    return (
        <div className="container about-container">
            <h1>Sobre Friendly's</h1>
            <img src={BannerAbout} alt="about us header" className="about-image"/>
           <div className="inside-wrapper-about">
                <p>
                lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip 
                </p>
                <p>
                lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,
                </p>
                <div className="about-block-quote">
                    <h2>lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,</h2>
                </div>
                <div className="team-header">
                    <h2>Nosso fantástico time</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,</p>
                </div>
           </div>
                <div className="team-members-wrapper">
                    <div className="team-member">
                        <img src={Member1} alt="Member 1" />
                        <h2>Michael Weight</h2>
                        <p>Kitchener</p>
                    </div>
                    <div className="team-member">
                        <img src={Member2} alt="Member 2" />
                        <h2>Michael Weight</h2>
                        <p>Kitchener</p>
                    </div>
                    <div className="team-member">
                        <img src={Member3} alt="Member 3" />
                        <h2>Michael Weight</h2>
                        <p>Kitchener</p>
                    </div>
                </div>
        </div>
    )
}

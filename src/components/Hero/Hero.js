import React from 'react'
import './Hero.scss'
import ReactRoatingText from 'react-rotating-text'

const Hero = props => (

    <div className="heroContainer" >
        <div className="bannerImgContainer">
            <div className="heroText">
                <p>Hi, I'm Brian and I am a </p>
                <p><ReactRoatingText items={['Web Developer']}/></p>
            </div>
        </div>
    </div>
);

export default Hero;
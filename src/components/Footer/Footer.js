import React from 'react'
import './Footer.scss'
import Logo from '../Logo/Logo'
import SocialIcons from '../Navigation/NavigationItems/NavigationItems'

const Footer = props => (

    <div className="footerContainer">
        <div className="logoContainer">
            <Logo />
        </div>
        <div className="socialIconsContainer">
            <SocialIcons />
        </div>
        <div className="taglineContainer">
            <p>Web Developer | Website Designer | Project Manager | Facebook ADs Manager | Web Analyst</p>
        </div>
        <div className="footerNotes">
            <p className="footerSubNotes">Designed and handcoded by myself</p>
            <p className="footerSubNotes">
                Website was made using&nbsp;
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>,&nbsp;
                <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">React-Bootstrap</a>, and&nbsp;
                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>
            </p>
            <p className="footerSubNotes">
                View the source code of the website&nbsp;
                <a href="https://github.com/briantrang/portfolio" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            
        </div>
    </div>

);

export default Footer;
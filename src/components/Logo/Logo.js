import React from 'react';
import myLogo from '../../assets/images/Logo 1000x400.png';
import './Logo.scss';

const Logo = props => (
    <div className="logoStyle">
        <a href="/"><img src={myLogo} alt="My Logo"/></a>
    </div>
);

export default Logo;
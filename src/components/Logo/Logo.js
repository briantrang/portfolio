import React from 'react';
import myLogo from '../../assets/images/Logo 1000x400.png';
import './Logo.scss';

const Logo = props => (
    <div className="logoStyle">
        <img src={myLogo} alt="My Logo"/>
    </div>
);

export default Logo;
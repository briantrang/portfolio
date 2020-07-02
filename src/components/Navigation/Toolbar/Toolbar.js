import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.scss'


const Toolbar = props => (
    <header className="Toolbar">
        <div className="Logo">
            <Logo />
        </div>
        <nav className="socialIcons">
            <NavigationItems  />
        </nav>
    </header>
    
    
);

export default Toolbar;
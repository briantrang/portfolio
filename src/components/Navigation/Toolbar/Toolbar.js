import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.scss'


const Toolbar = props => {

    window.onscroll = function() {scrollFunction()};

    return(
        <header id="Toolbar">
            <div className="Logo">
                <Logo />
            </div>
            <nav className="socialIcons">
                <NavigationItems  />
            </nav>
        </header>
    )
   
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("Toolbar").style.background = "rgba(255, 255, 255, 0.9)";
        document.getElementById("Toolbar").style.paddingTop = ".5rem";
    } else {
        document.getElementById("Toolbar").style.background = "white";
      }
    }
};

export default Toolbar;
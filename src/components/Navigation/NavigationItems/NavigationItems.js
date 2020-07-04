import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.scss'

const NavigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem
            link="https://www.linkedin.com/in/brian-trang-912704119/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
        </NavigationItem>
        <NavigationItem
            link="https://github.com/briantrang">
            <i className="fa fa-github" aria-hidden="true"></i>
        </NavigationItem>
        <NavigationItem
            link="mailto:briantrang@ymail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
        </NavigationItem>
    </ul>
);

export default NavigationItems;
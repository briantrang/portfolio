import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.scss'

const NavigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem
            link="https://www.linkedin.com/in/brian-trang-912704119/">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
        </NavigationItem>
        <NavigationItem
            link="https://github.com/briantrang">
            <i class="fa fa-github" aria-hidden="true"></i>
        </NavigationItem>
        <NavigationItem
            link="mailto:briantrang@ymail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
        </NavigationItem>
        {/* <NavigationItem>Experience</NavigationItem> */}
    </ul>
);

export default NavigationItems;
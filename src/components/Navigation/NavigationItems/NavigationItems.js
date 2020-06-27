import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.scss'

const NavigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem>Resume</NavigationItem>
        {/* <NavigationItem>Experience</NavigationItem> */}
    </ul>
);

export default NavigationItems;
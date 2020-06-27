import React from 'react'
import './NavigationItem.scss'


const NavigationItem = props => (
    <li className="NavigationItem">{props.children}</li>
);

export default NavigationItem;
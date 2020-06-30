import React from 'react'
import './Button.scss'

const Button = props => (

        <a className="button" href={props.link} target={props.target}>{props.children}</a>

);

export default Button;
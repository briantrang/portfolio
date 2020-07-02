import React from 'react'
import './Button.scss'

const Button = props => (

        <a className="button" href={props.link} target={props.target} onClick={props.onClick} style={props.style}>
                {props.children}{props.content}
        </a>

);

export default Button;
import React from 'react'
import './ServicesColumn.scss'

const ServicesColumn = props => (
    
    <div className="col-12 col-md-6 col-xl-3 column">
        <div className="fontLogo">
            <i className={props.fontLogo} aria-hidden="true"></i>
        </div>
        <h1 className="servicesColumnTitle">
            {props.title}
        </h1>
        <p className="description">
            {props.description}
        </p>
        <hr className="hrStyle"/>
        <p className="quote"><i>{props.quote}</i></p>
    </div>
);

export default ServicesColumn;
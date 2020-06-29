import React from 'react'
import './SectionHeader.scss'


const SectionHeader = props => (

        <div className="sectionContainer">
            <div className="sectionContent">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <h5>{props.subContentHeading}</h5>
            </div>
        </div>

);

export default SectionHeader;

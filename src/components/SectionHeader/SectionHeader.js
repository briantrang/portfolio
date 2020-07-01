import React from 'react'
import './SectionHeader.scss'


const SectionHeader = props => (

        <div className="sectionContainer">
            <div className="sectionContent">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <p>{props.subContentHeading}</p>
            </div>
        </div>

);

export default SectionHeader;

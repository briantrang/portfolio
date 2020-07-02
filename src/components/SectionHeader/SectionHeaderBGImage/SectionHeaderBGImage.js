import React from 'react'
import './SectionHeaderBGImage.scss'

const SectionHeaderBGImage = props => (
    <div className="sectionContainer bannerImage" style={{backgroundImage: `url(${props.background})`}}>
        <div className="sectionContent">
            <h1 className="sectionTitleText">{props.title}</h1>
            <p className="sectionContentText">{props.content}</p>
            <h5 className="sectionSubContentText">{props.subContentHeading}</h5>
        </div>
    </div>
);

export default SectionHeaderBGImage;
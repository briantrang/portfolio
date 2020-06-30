import React from 'react'
import './ProjectItems.scss'

const ProjectItems = props => (

    <div className="custom-col-12 custom-col-sm-6 custom-col-xl-3 p-3">
        <div className="projectItemContainer">
            <div className="image">
                <img className="projectImage" src={props.background} alt="Company BG"/>
                <div className="companyDetails fadeInBottom">
                    <p className="companyInfo">{props.aboutCompany}</p>
                    <a className="btn btn-primary" href={props.companyLink} target="_blank">View Website</a>
                </div>
            <div className="imageOverlay"></div>
           </div>
        </div>
    </div>

);

export default ProjectItems;
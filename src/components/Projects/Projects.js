import React from 'react'
import './Projects.scss'
import ProjectItems from './ProjectItems/ProjectItems'
import SonsisiBG from '../../assets/images/Projects/CompanyBG/SonsisiImage.jpg';
import SuperbBG from '../../assets/images/Projects/CompanyBG/SuperbImage.jpg';
import NoBSBG from '../../assets/images/Projects/CompanyBG/NoBSImage.jpg';
import DeepBlueBG from '../../assets/images/Projects/CompanyBG/DeepBlueImage.jpg';

const Projects = props => (

    <div className="sectionProjectsContainer">
        <div className="projectContainer">
            <div className="customRow">
                <ProjectItems background={SonsisiBG} />
                <ProjectItems background={SuperbBG} />
                <ProjectItems background={NoBSBG} />
                <ProjectItems background={DeepBlueBG} />
            </div>
        </div>
    </div>
);

export default Projects;
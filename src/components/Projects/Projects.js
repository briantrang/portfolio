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
                <ProjectItems 
                    background={SonsisiBG} 
                    aboutCompany="High-end affordable Korean Beauty Supply E-Commerce store." 
                    companyLink="https://sonsisibeauty.com/" />
                <ProjectItems 
                    background={SuperbBG} 
                    aboutCompany="Custom designed dops for gem faceting made with precision." 
                    companyLink="https://superbdops.com/" />
                <ProjectItems 
                    background={NoBSBG} 
                    aboutCompany="E-Commerce store that follows the No BS lifestyle." 
                    companyLink="https://www.nobsmantra.com/" />
                <ProjectItems 
                    background={DeepBlueBG} 
                    aboutCompany="Discover scuba diving in the Philippines and have an unforgettable experience." 
                    companyLink="https://deepblueseafari.com/" />
            </div>
        </div>
    </div>
);

export default Projects;
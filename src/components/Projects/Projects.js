import React from 'react'
import './Projects.scss'
import ProjectItems from './ProjectItems/ProjectItems'

const Projects = props => {
    var projectsArr = [];
    projectsArr = props.projectsContent;
    return(
        <div className="sectionProjectsContainer">
            <div className="projectContainer">
                <div className="customRow">
                    { 
                        projectsArr.map((item, i) => {
                            return(
                                <ProjectItems
                                    key={i}
                                    background={item.companyLogo}
                                    aboutCompany={item.aboutCompany}
                                    companyLink={item.companyLink}
                            />);
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
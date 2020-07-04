import React from 'react'
import './Services.scss'
import ServicesColumn from './ServicesColumn/ServicesColumn'
import NegativeTopMargin from '../Layout/NegativeTopMargin/NegativeTopMargin'

const Services = props => {
    var servicesArr = [];
    servicesArr = props.servicesContent;

    return(
        <NegativeTopMargin>
            
            <div className="sectionServicesContainer">
                <div className="servicesContainer">
                    <div className="row flexDisplay">
                    {
                        servicesArr.map((item, i) => {
                            return(
                                <ServicesColumn 
                                    key={i}
                                    title={item.title}
                                    fontLogo={item.fontLogo}
                                    description={item.description}
                                    quote={item.quote}
                                />
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </NegativeTopMargin>
    );
};

export default Services;
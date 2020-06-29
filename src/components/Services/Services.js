import React from 'react'
import './Services.scss'
import ServicesColumn from './ServicesColumn/ServicesColumn'
import NegativeTopMargin from '../Layout/NegativeTopMargin/NegativeTopMargin'

const Services = props => (
    <NegativeTopMargin>
        <div className="sectionServicesContainer">
            <div className="servicesContainer">
                <div className="row flexDisplay">
                    <ServicesColumn 
                        title="Speed" 
                        fontLogo={<i class="fa fa-fighter-jet" aria-hidden="true"></i>}
                        description="Website speed is one of my top priorities so that all users can 
                        view the website's content instead of a black loading screen."
                        quote="I feel the need... the need for speed. - Tom Cruise"
                        />
                    <ServicesColumn 
                        title="Responsiveness" 
                        fontLogo={<i class="fas fa-desktop"></i>}
                        description="I heavily value the responsiveness of websites as it is extremely
                        important nowadays to have a website that can be viewed from any device."
                        quote="You must be shapeless, formless, like water. 
                        When you pour water in a cup, it becomes the cup. 
                        When you pour water in a bottle, it becomes the bottle. 
                        When you pour water in a teapot, it becomes the teapot. 
                        Water can drip and it can crash. Become like water my friend. - Bruce Lee"
                        />
                    <ServicesColumn    
                        title="Instictual" 
                        fontLogo={<i class="far fa-lightbulb"></i>}
                        description="If a website has speed and responsiveness, those will all go down 
                        the drain if it is not easy to use."
                        quote="Simplicity is the ultimate sophistication. - Leonardo da Vinci"
                        />
                    <ServicesColumn 
                        title="Design" 
                        fontLogo={<i class="far fa-eye"></i>}
                        description="The design of a website is what separates it from the competition.
                        A website that is only fast, responsive, and easy to use is just another website."
                        quote="Just designing a website is what anyone can do, 
                        but designing a unique website is what sets you apart. - Me"
                        />
                </div>
            </div>
        </div>
    </NegativeTopMargin>
);

export default Services;
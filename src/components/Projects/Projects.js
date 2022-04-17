import React from "react";
import "./Projects.scss";
import ProjectItems from "./ProjectItems/ProjectItems";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Autoplay, Controller, Lazy } from "swiper";
SwiperCore.use([Autoplay, Controller, Lazy]);

const Projects = (props) => {
	var projectsArr = [];
	projectsArr = props.projectsContent;
	return (
		<div className="project-content">
			<Swiper
				spaceBetween={15}
				slidesPerView={1.2}
				loop={true}
				freeMode={true}
				lazy={true}
				breakpoints={{
					1920: {
						slidesPerView: 4.2,
					},
					1000: {
						slidesPerView: 3.2,
					},
					600: {
						slidesPerView: 2.2,
					},
				}}
			>
				{projectsArr.map((item, i) => {
					return (
						<SwiperSlide key={i}>
							<ProjectItems
								key={`proj` + i}
								background={item.companyLogo}
								aboutCompany={item.aboutCompany}
								companyLink={item.companyLink}
								companyName={item.companyName}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Projects;

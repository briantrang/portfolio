import React from "react";
import TimelineItem from "./TimelineItem/TimelineItem";
import "./Timeline.scss";

const Timeline = (props) => {
	let timeline = props.timelineArray;
	let sortedTimeline = timeline.sort((a, b) => {
		let aDate = new Date(a.startDate);
		let bDate = new Date(b.startDate);
		return bDate - aDate;
	});
	return (
		<div className="portfolio-container">
			<div className="timeline-container">
				{sortedTimeline.map((item, index) => {
					return (
						<TimelineItem
							key={index}
							startDate={item.startDate}
							endDate={item.endDate}
							heading={item.heading}
							role={item.role}
							body={item.body}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Timeline;

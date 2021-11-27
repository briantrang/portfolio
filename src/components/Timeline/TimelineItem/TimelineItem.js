import React from "react";
import "./TimelineItem.scss";

const TimelineItem = (props) => {
	return (
		<div className="timeline-item-container">
			<div className="timeline-item-content">
				<div className="timeline-date">
					{props.startDate} - {props.endDate}
				</div>
				<div className="timeline-heading">{props.heading}</div>
				<div className="timeline-role">{props.role}</div>
				<div className="timeline-body">{props.body}</div>
				<div className="timeline-circle"></div>
			</div>
		</div>
	);
};

export default TimelineItem;

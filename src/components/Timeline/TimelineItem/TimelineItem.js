import React, { useState } from "react";
import "./TimelineItem.scss";

const TimelineItem = (props) => {
	const [showBody, setShowBody] = useState(false);

	return (
		<div className="timeline-item-container">
			<div className="timeline-item-content">
				<div className="timeline-date">
					{props.startDate} - {props.endDate}
				</div>
				<div className="timeline-heading">{props.heading}</div>
				<div className="timeline-role">{props.role}</div>
				{showBody && <div className="timeline-body">{props.body}</div>}
				<button className="timeline-button" onClick={() => setShowBody(!showBody)}>
					Read More
				</button>
				<div className="timeline-circle"></div>
			</div>
		</div>
	);
};

export default TimelineItem;

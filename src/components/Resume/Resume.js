import React, { useState } from "react";
import "./Resume.scss";
import Modal from "react-bootstrap/Modal";

const Resume = (props) => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<div className="portfolio-container">
				<div className="resume-content">
					<div className="resume-heading">{props.title}</div>
					<div className="resume-body">
						{props.description} <br />
						<button className="resume-button" onClick={() => setShow(true)}>
							View my Resume <i className="fas fa-external-link-alt"></i>
						</button>
					</div>
				</div>
				<Modal show={show} onHide={() => setShow(false)} dialogClassName="modalContent">
					<Modal.Header closeButton>
						<Modal.Title className="modalTitle">
							Brian Trang's Resume -
							<a href={props.link} target="_blank" rel="noopener noreferrer">
								&nbsp;Direct Link
							</a>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<iframe className="iframe" title="resume" src={props.link}></iframe>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default Resume;

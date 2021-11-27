import React, { useState } from "react";
import "./Contact.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Contact = (props) => {
	//States for all input values
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [messageSuccess, setMessageSuccess] = useState(false);

	//Input Value Handlers
	var handleFirstName = (event) => {
		setFirstName(event.target.value);
	};

	var handleLastName = (event) => {
		setLastName(event.target.value);
	};

	var handleEmail = (event) => {
		setEmail(event.target.value);
	};

	var handleMessage = (event) => {
		setMessage(event.target.value);
	};

	var handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			firstName,
			lastName,
			email,
			message,
		};

		axios
			.post("https://porfoliocontactserver.firebaseio.com/message.json", data)
			.then((res) => console.log("MESSAGE SENT!"))
			.catch((err) => console.log("MESSAGE FAILED! " + err));
		resetForm();
	};

	//Form Reset after submitted message
	var resetForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
		setMessageSuccess(true);

		setTimeout(() => {
			setMessageSuccess(false);
		}, 4000);
	};

	return (
		<div className="portfolio-container">
			<form className="contact-container" onSubmit={handleSubmit}>
				<div className="contact-info">
					<div className="contact-field">
						<input
							className="contact-input"
							type="text"
							name="firstName"
							value={firstName}
							required
							onChange={handleFirstName}
							placeholder=" "
						/>
						<label className="contact-label">First Name</label>
					</div>
					<div className="contact-field">
						<input
							className="contact-input"
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleLastName}
							placeholder=" "
						/>
						<label className="contact-label">Last Name</label>
					</div>
					<div className="contact-field">
						<input
							className="contact-input"
							type="input"
							name="email"
							value={email}
							onChange={handleEmail}
							placeholder=" "
						/>
						<label className="contact-label">Email</label>
					</div>
				</div>
				<div className="contact-message">
					<textarea
						className="contact-message-input"
						name="message"
						value={message}
						onChange={handleMessage}
						placeholder=" "
					/>
					<label className="contact-label">Message</label>
				</div>
				<div className="contact-button-container">
					<Button type="submit" className="contact-button">
						Send Message
					</Button>
				</div>
				<p className={messageSuccess ? "messageSuccess text-center" : "messageHide"}>MESSAGE SENT!</p>
			</form>
		</div>
	);
};

export default Contact;

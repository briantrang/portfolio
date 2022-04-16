import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";

const Footer = (props) => (
	<div className="footer-content">
		<div className="logoContainer">
			<Logo />
		</div>
		<div className="social-icons-container">
			<a
				className="social-icon"
				href="https://www.linkedin.com/in/brian-trang-912704119/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fa fa-linkedin"></i>
			</a>
			<a className="social-icon" href="https://github.com/briantrang" target="_blank" rel="noopener noreferrer">
				<i className="fa fa-github"></i>
			</a>
			<a className="social-icon" href="briantrang@ymail.com" target="_blank" rel="noopener noreferrer">
				<i className="fa fa-envelope"></i>
			</a>
		</div>
		<div className="footer-notes">
			<p className="footerSubNotes">Designed and handcoded by myself</p>
			<p className="footerSubNotes">
				Website was made using&nbsp;
				<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
					ReactJS
				</a>
				,&nbsp;
				<a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
					React-Bootstrap
				</a>
				, and&nbsp;
				<a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
					Font Awesome
				</a>
			</p>
			<p className="footerSubNotes">
				View the source code of the website&nbsp;
				<a href="https://github.com/briantrang/portfolio" target="_blank" rel="noopener noreferrer">
					here
				</a>
				.
			</p>
		</div>
	</div>
);

export default Footer;

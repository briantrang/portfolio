import React from "react";
import myLogo from "../../assets/images/transparent-logo.png";
import "./Logo.scss";

const Logo = (props) => (
	<div className="logoStyle">
		<a href="/">
			<img src={myLogo} alt="My Logo" />
		</a>
	</div>
);

export default Logo;

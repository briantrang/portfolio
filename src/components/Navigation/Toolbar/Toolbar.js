import React, { useState } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.scss";

const Toolbar = (props) => {
	const [showMobile, setShowMobile] = useState(false);
	window.onscroll = function () {
		scrollFunction();
		if (showMobile) {
			scrollFunctionMobile();
		}
	};

	return (
		<>
			<nav id="toolbar" className="nav-bar">
				<div className="nav-main portfolio-container">
					<NavigationItems />
				</div>
				<div className="nav-toggler" onClick={() => setShowMobile(!showMobile)}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</nav>
			{showMobile && (
				<div id="mobile-menu" className="nav-mobile-main">
					<NavigationItems mobile />
				</div>
			)}
		</>
	);

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById("toolbar").style.background = "rgba(0, 0, 0, 0.9)";
		} else {
			document.getElementById("toolbar").style.background = "black";
		}
	}
	function scrollFunctionMobile() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById("mobile-menu").style.background = "rgba(0, 0, 0, 0.9)";
		} else {
			document.getElementById("mobile-menu").style.background = "black";
		}
	}
};

export default Toolbar;

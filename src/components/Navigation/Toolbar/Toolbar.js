import React, { useState } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.scss";

const Toolbar = (props) => {
	// window.onscroll = function () {
	// 	scrollFunction();
	// };
	const [showMobile, setShowMobile] = useState(false);

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
				<div className="nav-mobile-main">
					<NavigationItems mobile />
				</div>
			)}
		</>
	);

	// function scrollFunction() {
	// 	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	// 		document.getElementById("toolbar").style.background = "rgba(255, 255, 255, 0.9)";
	// 		document.getElementById("toolbar").style.paddingTop = ".5rem";
	// 	} else {
	// 		document.getElementById("toolbar").style.background = "white";
	// 	}
	// }
};

export default Toolbar;

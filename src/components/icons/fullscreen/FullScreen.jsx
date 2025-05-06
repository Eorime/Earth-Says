import React, { useState, useEffect } from "react";
import {
	fullscreen,
	FullScreenContainer,
	FullScreenDecrease,
	FullScreenIncrease,
} from "./style";

const FullScreen = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	useEffect(() => {
		// function to check and update fullscreen state
		const handleFullScreenChange = () => {
			const fullScreenElement =
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement;

			setIsFullScreen(!!fullScreenElement);
		};

		// function to detect F11 fullscreen mode by checking window dimensions
		const checkF11FullScreen = () => {
			const isF11FullScreen =
				window.innerWidth === window.screen.width &&
				window.innerHeight === window.screen.height;

			const fullScreenElement =
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement;

			setIsFullScreen(!!fullScreenElement || isF11FullScreen);
		};

		// add event listeners for fullscreen changes across different browsers
		document.addEventListener("fullscreenchange", handleFullScreenChange);
		document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
		document.addEventListener("mozfullscreenchange", handleFullScreenChange);
		document.addEventListener("MSFullscreenChange", handleFullScreenChange);

		// add event listeners for F11 fullscreen detection
		window.addEventListener("resize", checkF11FullScreen);

		// initial check
		checkF11FullScreen();

		// clean up event listeners on component unmount
		return () => {
			document.removeEventListener("fullscreenchange", handleFullScreenChange);
			document.removeEventListener(
				"webkitfullscreenchange",
				handleFullScreenChange
			);
			document.removeEventListener(
				"mozfullscreenchange",
				handleFullScreenChange
			);
			document.removeEventListener(
				"MSFullscreenChange",
				handleFullScreenChange
			);
			window.removeEventListener("resize", checkF11FullScreen);
		};
	}, []);

	const handleFullScreen = () => {
		fullscreen();
	};

	return (
		<FullScreenContainer>
			{isFullScreen ? (
				<FullScreenDecrease onClick={handleFullScreen} />
			) : (
				<FullScreenIncrease onClick={handleFullScreen} />
			)}
		</FullScreenContainer>
	);
};

export default FullScreen;

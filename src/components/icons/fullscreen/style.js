import styled from "styled-components";

export const fullscreen = () => {
	const elem = document.documentElement;

	if (!document.fullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			// firefox
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			// chrome, safari, opera
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) {
			// edge
			elem.msRequestFullscreen();
		}
	} else {
		//exits fullscreen
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			// firefox
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			// chrome, safari, opera
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			// edge
			document.msExitFullscreen();
		}
	}
};

export const FullScreenContainer = styled.div`
	position: relative;

	@media (max-width: 768px) {
		position: fixed;
		visibility: hidden;
	}
`;

export const FullScreenIncrease = styled.div`
	z-index: 0;
	left: 50%;
	transform: translateX(-50%);
	transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
	cursor: pointer;
	position: absolute;
	transform-origin: center;

	width: 24px;
	height: 23px;

	background: linear-gradient(to right, rgb(102, 102, 102) 2px, transparent 2px)
			0 0,
		linear-gradient(to right, rgb(102, 102, 102) 2px, transparent 2px) 0 100%,
		linear-gradient(to left, rgb(102, 102, 102) 2px, transparent 2px) 100% 0,
		linear-gradient(to left, rgb(102, 102, 102) 2px, transparent 2px) 100% 100%,
		linear-gradient(to bottom, rgb(102, 102, 102) 2px, transparent 2px) 0 0,
		linear-gradient(to bottom, rgb(102, 102, 102) 2px, transparent 2px) 100% 0,
		linear-gradient(to top, rgb(102, 102, 102) 2px, transparent 2px) 0 100%,
		linear-gradient(to top, rgb(102, 102, 102) 2px, transparent 2px) 100% 100%;

	background-repeat: no-repeat;
	background-size: 8px 8px;

	&:hover {
		width: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const FullScreenDecrease = styled.div`
	// width: 40px;
	// height: 20px;
	position: absolute;
	cursor: pointer;
	transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
	transform-origin: center;
	z-index: 0;
	left: 50%;
	transform: translateX(-50%);

	width: 24px;
	height: 23px;

	background: linear-gradient(to left, rgb(102, 102, 102) 2px, transparent 2px)
			0 0,
		linear-gradient(to left, rgb(102, 102, 102) 2px, transparent 2px) 0 100%,
		linear-gradient(to right, rgb(102, 102, 102) 2px, transparent 2px) 100% 0,
		linear-gradient(to right, rgb(102, 102, 102) 2px, transparent 2px) 100% 100%,
		linear-gradient(to top, rgb(102, 102, 102) 2px, transparent 2px) 0 0,
		linear-gradient(to top, rgb(102, 102, 102) 2px, transparent 2px) 100% 0,
		linear-gradient(to bottom, rgb(102, 102, 102) 2px, transparent 2px) 0 100%,
		linear-gradient(to bottom, rgb(102, 102, 102) 2px, transparent 2px) 100%
			100%;
	background-repeat: no-repeat;
	background-size: 7px 7px;

	&:hover {
		width: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
`;

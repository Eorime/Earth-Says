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

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 50px);
	background-color: black;
	position: relative;

	@media (max-width: 1300px) {
		height: 94vh;
	}

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
	background-size: 20px 20px;
`;

export const HomeInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 95%;
`;

export const EarthSaysText = styled.p`
	position: absolute;
	top: 0;
	color: white;
	font-size: clamp(8px, 4vw, 16px);
	margin: 0;
`;

export const TextContainer = styled.div`
	width: 80%;
	height: 75%;
`;

export const IconsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100 %;
`;

export const FullScreenContainer = styled.div`
	position: absolute;
`;

export const FullScreenIncrease = styled.div`
	// width: 20px;
	// height: 20px;
	// border: 2px solid rgb(102, 102, 102);

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

export const SoundContainer = styled.div`
	position: relative;
`;

export const TurnOffSound = styled.div`
	position: relative;
	width: 20px;
	height: 20px;
	position: absolute;
	cursor: pointer;
	transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
	transform-origin: center;
	border: 2px solid rgb(102, 102, 102);
	z-index: 0;
	left: 50%;
	transform: translateX(-50%);

	&:hover {
		width: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const TurnOnSound = styled.div``;

import styled from "styled-components";
import html2canvas from "html2canvas";

export const screenshot = () => {
	html2canvas(document.body, {
		backgroundColor: null, // avoid adding a white background
	}).then((canvas) => {
		const screenshotUrl = canvas.toDataURL("image/png");

		const link = document.createElement("a");
		link.href = screenshotUrl;
		link.download = "EarthSays.png";
		link.click();
	});
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

export const ScreenshotContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100px;
	cursor: pointer;
`;

export const Rectangle = styled.div`
	width: 20px;
	height: 20px;
	cursor: pointer;
	position: relative;
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
export const Circle = styled.div`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	border: 2px solid rgb(102, 102, 102);
`;

import styled from "styled-components";
import html2canvas from "html2canvas";

export const screenshot = () => {
	//find and temporarily hide the icons
	const iconsContainer = document.querySelector(".icons-container");

	if (iconsContainer) {
		iconsContainer.style.visibility = "hidden";
	}

	html2canvas(document.body, {
		backgroundColor: null, // avoid adding a white background
		ignoreElements: (element) => {
			return element.classList.contains("icons-container");
		},
	}).then((canvas) => {
		const screenshotUrl = canvas.toDataURL("image/png");
		const link = document.createElement("a");
		link.href = screenshotUrl;
		link.download = "EarthSays";
		link.click();

		// restore visibility after screenshot is taken
		if (iconsContainer) {
			iconsContainer.style.visibility = "visible";
		}
	});
};
export const Rectangle = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	cursor: pointer;
	transition: width 0.3s ease-in-out;
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
	width: 12px;
	height: 12px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	border: 2px solid rgb(102, 102, 102);
`;

export const ScreenshotContainer = styled.div`
	position: relative;
	width: 40px;
	height: 20px;
	bottom: 0;
	cursor: pointer;

	&:active ${Rectangle}, &:active ${Circle} {
		border: 2px solid white;
	}
`;

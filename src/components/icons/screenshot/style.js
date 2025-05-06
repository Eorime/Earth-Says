import styled from "styled-components";

export const screenshot = () => {
	const iconsContainer = document.querySelector(".icons-container");

	// store the original display style
	let originalDisplay = "flex";

	if (iconsContainer) {
		// store original display before changing it and use display none
		originalDisplay = window.getComputedStyle(iconsContainer).display;
		iconsContainer.style.display = "none";
	}

	import("dom-to-image")
		.then((domtoimage) => {
			const node = document.body;

			domtoimage
				.toPng(node, {
					filter: (element) => {
						// Additional filter to make sure icons container is excluded
						return !element.classList?.contains("icons-container");
					},
					bgcolor: null, // transparent background
				})
				.then((dataUrl) => {
					const link = document.createElement("a");
					link.href = dataUrl;
					link.download = "EarthSays.png";
					link.click();

					// restore the icons container with its original display property
					if (iconsContainer) {
						iconsContainer.style.display = originalDisplay;
					}
				})
				.catch((error) => {
					console.error("Screenshot failed:", error);

					// restore the icons container even if screenshot fails
					if (iconsContainer) {
						iconsContainer.style.display = originalDisplay;
					}
				});
		})
		.catch((error) => {
			console.error(error);

			// restore the icons container if module import fails
			if (iconsContainer) {
				iconsContainer.style.display = originalDisplay;
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

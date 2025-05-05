import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	width: 100%;
	height: 100%;
	background-color: black;
	position: relative;

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
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const EarthSaysText = styled.p`
	color: white;
	font-size: clamp(8px, 4vw, 16px);
	margin: 0;
	letter-spacing: 1.3px;
	user-select: none;
	width: 100%;
	text-align: center;
`;

export const TextContainer = styled.div`
	--box-size: calc(
		(
				var(--windowHeight) - var(--horizontal-top-padding) -
					var(--horizontal-bottom-padding) - 2 * var(--extra-height) - 3 *
					var(--gap)
			) / 4
	);

	width: 100%;
	height: calc(
		var(--windowHeight) - var(--horizontal-top-padding) -
			var(--horizontal-bottom-padding) - 2 * var(--extra-height)
	);
	padding-top: var(--horizontal-top-padding);
	padding-bottom: var(--horizontal-bottom-padding);
`;

export const IconsContainer = styled.div`
	display: flex;
	gap: 50px;
	position: absolute;
	bottom: 5%;
`;

export const CursorContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 40%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;

export const Cursor = styled.div`
	width: 1px;
	height: clamp(80px, 4vw, 100px);
	background-color: rgb(102, 102, 102);
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export const Prompt = styled.p`
	font-size: 20px;
	color: rgb(102, 102, 102);
	margin: 5px 0 0 0;
	font-family: "Grotesk";
	font-size: clamp(8px, 4vw, 16px);
	margin: 0;
	letter-spacing: 1.5px;
	user-select: none;
`;

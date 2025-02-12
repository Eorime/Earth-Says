import styled from "styled-components";

export const SoundContainer = styled.div`
	position: relative;
`;

export const ToggleSound = styled.div`
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

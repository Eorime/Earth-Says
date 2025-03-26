import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 50px);
	background-color: black;
	position: relative;

	@media (max-width: 1300px) {
		height: 94vh;
	}

	@media (max-width: 500px) {
		height: 83vh;
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
	letter-spacing: 1.3px;
`;

export const TextContainer = styled.div`
	width: 80%;
	height: 75%;
`;

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 50px;
	position: relative;
	top: 8vh;
	transform: translate3d(-5%, 50%, 0);
`;

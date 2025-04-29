import { styled, keyframes } from "styled-components";

const scaleUp = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
`;

export const DisplayContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	@media screen and (max-width: 800px) {
		gap: 0.5;
		height: auto;
	}
`;

export const LettersRow = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 0;
	user-select: none;
	pointer-events: none;
	height: calc(100% / 4);
`;

export const LettersDisplay = styled.div`
	display: flex;
	gap: 1rem;
	max-width: 1520px;
	max-height: 665px;
	overflow-y: hidden;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 1600px) {
		max-height: 400px;
	}

	@media screen and (max-width: 1440px) {
		max-height: 440px;
	}

	@media screen and (max-width: 800px) {
		gap: 0.5rem;
	}
`;

export const LetterBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: calc(
		(
				var(--windowHeight) - var(--horizontal-top-padding) -
					var(--horizontal-bottom-padding) - var(--extra-height)
			) / 4
	);
	height: calc(
		(
				var(--windowHeight) - var(--horizontal-top-padding) -
					var(--horizontal-bottom-padding) - var(--extra-height)
			) / 4
	);
	user-select: none;
	pointer-events: none;

	@media screen and (max-width: 1440px) {
		width: 96px;
		height: 96px;
	}

	@media screen and (max-width: 500px) {
		width: 60px;
		height: 60px;
	}
`;

export const LetterImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	animation: ${scaleUp} 0.1s ease-out;
`;

export const SpaceBox = styled.div`
	width: 60px;
	height: 120px;

	@media screen and (max-width: 1440px) {
		width: 48px;
		height: 96px;
	}

	@media screen and (max-width: 500px) {
		width: 30px;
		height: 60px;
	}
`;

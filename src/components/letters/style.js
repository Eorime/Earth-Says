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
`;

export const DisplayContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const LettersRow = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 0;
	user-select: none;
	pointer-events: none;
	height: calc(100% / 4);
	margin-bottom: var(--gap);
	&:last-child {
		margin-bottom: 0;
	}
`;

export const LettersDisplay = styled.div`
	display: flex;
	gap: 0 var(--gap);
	overflow-y: hidden;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const LetterBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: var(--box-size);
	height: var(--box-size);
	user-select: none;
	pointer-events: none;
`;

export const LetterImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	animation: ${scaleUp} 0.1s ease-out;
`;

export const SpaceBox = styled.div`
	width: calc(
		(
				var(--windowHeight) - var(--horizontal-top-padding) -
					var(--horizontal-bottom-padding) - 2 * var(--extra-height) - 3 *
					var(--gap)
			) / 4
	);
	height: calc(
		(
				var(--windowHeight) - var(--horizontal-top-padding) -
					var(--horizontal-bottom-padding) - 2 * var(--extra-height) - 3 *
					var(--gap)
			) / 4
	);
`;

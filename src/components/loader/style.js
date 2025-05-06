import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	margin-top: -5%;
`;

export const LoaderLetterBox = styled.div`
	--box-size: calc(
		(
				var(--windowHeight) - var(--horizontal-top-padding) -
					var(--horizontal-bottom-padding) - 2 * var(--extra-height) - 3 *
					var(--gap)
			) / 4
	);
	display: flex;
	flex-direction: row;
	width: var(--box-size);
	height: var(--box-size);
	justify-content: center;
	align-items: center;
	user-select: none;
	pointer-events: none;
`;

export const LoaderLetterImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	margin: 0 0.6rem;
`;

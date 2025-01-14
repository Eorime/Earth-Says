import styled from "styled-components";

//todo: fix text wrap, make it go down 5 lines
//also araa centrshi, egec gafixe

export const Container = styled.div`
	min-height: 70vh;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
	padding-top: 2rem;
	display: flex;
`;

export const DisplayContainer = styled.div`
	width: 100%;
	height: auto;
	overflow-x: hidden;
	justify-content: center;
`;

export const LettersRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem 0;
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
`;

export const LetterBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LetterImage = styled.img`
	width: 120px;
	height: 120px;
	object-fit: contain;
`;

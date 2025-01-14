import styled from "styled-components";

//todo: fix text wrap, make it go down 5 lines
//also araa centrshi, egec gafixe

export const Container = styled.div`
	display: flex;
	height: 70vh;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
	padding-top: 2rem;
	display: flex;
	flex-wrap: wrap;
`;

export const DisplayContainer = styled.div`
	width: 100%;
	height: auto;
	overflow-x: hidden;
`;

export const LettersRow = styled.div`
	display: flex;
	max-width: 100%;
	max-height: 100vh;
`;

export const LettersDisplay = styled.div`
	display: flex;
	gap: 1rem;
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

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
	width: 100%;
	height: 100%;
	flex-direction: column;
	gap: 1rem;
`;

export const LoaderLetterBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	user-select: none;
	pointer-events: none;
`;

export const LoaderLetterImg = styled.img`
	width: 100px;
	height: 100px;
	object-fit: contain;
	margin: 0 0.6rem;
`;

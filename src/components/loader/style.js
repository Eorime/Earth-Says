import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const LoaderContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const LoaderLetterBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: var(--box-size);
	height: var(--box-size);
	user-select: none;
	pointer-events: none;
`;

export const LoaderLetterImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

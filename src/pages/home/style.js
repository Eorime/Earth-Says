import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 95vh;
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

//#0D0D0D -background

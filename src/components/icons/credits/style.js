import styled from "styled-components";

export const CreditsContainer = styled.div`
	position: relative;
	width: 40px;
	height: 20px;
`;

export const Rectangle = styled.div`
	width: 20px;
	height: 20px;
	cursor: pointer;
	position: absolute;
	transition: width 0.3s ease-in-out;
	transform-origin: center;
	border: 2px solid rgb(102, 102, 102);
	z-index: 0;
	left: 50%;
	transform: translateX(-50%);

	&:hover {
		width: 40px;
	}
`;

export const Figure = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	&.first {
		left: 10%;
		transform: translateX(-50%) translateY(-50%);

		&::before {
			content: "";
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			border: 2px solid rgb(102, 102, 102);
		}

		&::after {
			content: "";
			position: absolute;
			width: 8px;
			height: 8px;
			top: 6px;
			border: 2px solid rgb(102, 102, 102);
		}
	}

	&.second {
		right: 35%;
		transform: translateX(-50%) translateY(-50%);
		opacity: 0;
		transition: opacity 0.1s ease-in-out;

		&::before {
			content: "";
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			border: 2px solid rgb(102, 102, 102);
		}

		&::after {
			content: "";
			position: absolute;
			width: 8px;
			height: 8px;
			top: 6px;
			border: 2px solid rgb(102, 102, 102);
		}
	}

	${Rectangle}:hover & {
		&.second {
			opacity: 1;
		}
	}
`;

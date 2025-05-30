import styled, { css } from "styled-components";

export const CreditsContainer = styled.div`
	position: relative;
	width: 40px;
	height: 20px;
`;

export const Rectangle = styled.div`
	width: ${(props) => (props.openModal ? "40px" : "19px")};
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
	top: 10%;
	transform: translateY(-50%);

	&.first {
		left: ${(props) => (props.openModal ? "25%" : "50%")};
		transform: translateX(-50%) translateY(-50%);
		transition: left 0.3s ease-in-out;

		&::before {
			content: "";
			position: absolute;
			width: 4px;
			height: 4px;
			border-radius: 50%;
			border: 2px solid rgb(102, 102, 102);
			left: 50%;
			top: 0.5px;
			transform: translateX(-50%);
		}

		&::after {
			content: "";
			position: absolute;
			width: 11px;
			height: 5px;
			top: 11px;
			border: 2px solid rgb(102, 102, 102);
			border-radius: 7px 7px 0px 0px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	&.second {
		right: ${(props) => (props.openModal ? "25%" : "35%")};
		transform: translateX(-50%) translateY(-50%);
		opacity: ${(props) => (props.openModal ? "1" : "0")};
		transition: opacity 0.3s ease-in-out, right 0.3s ease-in-out;

		&::before {
			content: "";
			position: absolute;
			width: 4px;
			height: 4px;
			border-radius: 50%;
			border: 2px solid rgb(102, 102, 102);
			left: 50%;
			top: 0.5px;
			transform: translateX(-50%);
		}

		&::after {
			content: "";
			position: absolute;
			width: 11px;
			height: 5px;
			top: 11px;
			border: 2px solid rgb(102, 102, 102);
			border-radius: 7px 7px 0px 0px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	${Rectangle}:hover & {
		&.first {
			left: 25%;
		}
		&.second {
			opacity: 1;
			right: 25%;
		}
	}
`;

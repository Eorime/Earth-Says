import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -60%, 0);
	width: 380px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 64px;
	border-radius: 20px;
	color: #ffffff;
	z-index: 10;
	gap: 30px;
	border-radius: 20px;

	@media (max-width: 500px) {
		width: 200px;
	}

	&::before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(23, 23, 23, 0.6);
		backdrop-filter: blur(5px);
		z-index: -1;
		border-radius: 20px;
	}
`;

export const LineContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Text = styled.span`
	font-size: 18px;
	text-align: center;
	line-height: 2;
	user-select: none;

	@media (max-width: 500px) {
		font-size: 11px;
	}
`;

export const Label = styled.span`
	font-size: 14px;
	font-weight: 200;
	line-height: 1;
	text-align: center;
	user-select: none;

	@media (max-width: 500px) {
		font-size: 8px;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: inherit;
`;

import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -60%, 0);
	width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 64px;
	border-radius: 20px;
	color: #ffffff;
	z-index: 10;
	gap: 60px;
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
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(5px);
		z-index: -1;
		border-radius: 20px;
	}
`;

export const Text = styled.span`
	font-size: 16px;
	text-align: center;
	line-height: 2;

	@media (max-width: 500px) {
		font-size: 11px;
	}
`;

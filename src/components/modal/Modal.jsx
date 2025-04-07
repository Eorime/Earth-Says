import React, { forwardRef } from "react";
import { ModalContainer, Text } from "./style";

const Modal = forwardRef(({ openModal }, ref) => {
	if (!openModal) return null;
	return (
		<ModalContainer ref={ref}>
			<Text>Created By</Text>
			<Text>
				Created by: <br />
				Daniel Grigorian & Elene Dgebuadze
			</Text>
			<Text>All photos used on this website belong to Google</Text>
		</ModalContainer>
	);
});

export default Modal;

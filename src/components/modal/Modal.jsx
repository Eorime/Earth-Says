import React, { forwardRef } from "react";
import { Label, LineContainer, Link, ModalContainer, Text } from "./style";

const Modal = forwardRef(({ openModal }, ref) => {
	if (!openModal) return null;
	return (
		<ModalContainer ref={ref}>
			<Text>Credits</Text>
			<LineContainer>
				<Label>Created By</Label>
				<Text>Daniel Grigorian & Elene Dgebuadze</Text>
			</LineContainer>
			<LineContainer>
				<Label>Contact Us</Label>
				<Link href="mailto:earthsayswebsite@gmail.com">
					<Text style={{ userSelect: "text" }}>earthsayswebsite@gmail.com</Text>
				</Link>
			</LineContainer>
			<Label style={{ fontSize: "12px", marginTop: "10px" }}>
				All photos used on this website belong to Google
			</Label>
		</ModalContainer>
	);
});

export default Modal;

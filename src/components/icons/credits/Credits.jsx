import React from "react";
import { CreditsContainer, Rectangle, Figure } from "./style";

const Credits = ({ onClick, openModal }) => {
	return (
		<CreditsContainer>
			<Rectangle onClick={onClick} openModal={openModal}>
				<Figure className="first" openModal={openModal} />
				<Figure className="second" openModal={openModal} />
			</Rectangle>
		</CreditsContainer>
	);
};

export default Credits;

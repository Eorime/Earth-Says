// Credits.js
import React from "react";
import { CreditsContainer, Rectangle, Figure } from "./style";

const Credits = () => {
	return (
		<CreditsContainer>
			<Rectangle>
				<Figure className="first" />
				<Figure className="second" />
			</Rectangle>
		</CreditsContainer>
	);
};

export default Credits;

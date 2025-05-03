import React, { useState } from "react";
import {
	Container,
	LoaderContainer,
	LoaderLetterBox,
	LoaderLetterContainer,
} from "./style";
import { letterImages } from "../letters/Letters";

const Loader = () => {
	const [currentImg, setCurrentImg] = useState();
	return (
		<Container>
			<LoaderContainer>
				<LoaderLetterBox></LoaderLetterBox>
			</LoaderContainer>
		</Container>
	);
};

export default Loader;

import React, { useState, useEffect, useRef } from "react";
import {
	Container,
	EarthSaysText,
	HomeInnerContainer,
	IconsContainer,
	TextContainer,
} from "./style";
import Letters from "../../components/letters/Letters";
import Screenshot from "../../components/icons/screenshot/Screenshot";
import FullScreen from "../../components/icons/fullscreen/FullScreen";
import Sound from "../../components/icons/sound/Sound";

const Home = () => {
	return (
		<Container>
			<HomeInnerContainer>
				<EarthSaysText>EARTH SAYS</EarthSaysText>
				<TextContainer>
					<Letters />
				</TextContainer>
				<IconsContainer>
					<Screenshot />
					<FullScreen />
					<Sound />
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

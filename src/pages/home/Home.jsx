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
import Credits from "../../components/icons/credits/Credits";
import Modal from "../../components/modal/Modal";

const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleCreditClick = () => {
		setOpenModal(!openModal);
	};

	return (
		<Container>
			{openModal && <Modal onClick={handleCreditClick} openModal={openModal} />}

			<HomeInnerContainer>
				<EarthSaysText>EARTH SAYS</EarthSaysText>
				<TextContainer>
					<Letters />
				</TextContainer>
				<IconsContainer>
					<Screenshot />
					<Sound />
					<Credits onClick={handleCreditClick} openModal={openModal} />
					<FullScreen />
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

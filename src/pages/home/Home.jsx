import React, { useEffect, useRef, useState } from "react";
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
	const [letterCount, setLetterCount] = useState(0);
	const modalRef = useRef();

	const handleOutsideClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			setOpenModal(!openModal);
		}
	};

	useEffect(() => {
		if (openModal) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.addEventListener("mousedown", handleOutsideClick);
		}

		//cleanup
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [openModal]);

	const handleCreditClick = () => {
		setOpenModal(!openModal);
	};

	const handleLetterCountChange = (count) => {
		setLetterCount(count);
	};

	return (
		<Container>
			{openModal && (
				<Modal
					onClick={handleCreditClick}
					openModal={openModal}
					ref={modalRef}
				/>
			)}

			<HomeInnerContainer>
				<EarthSaysText>EARTH SAYS</EarthSaysText>
				<TextContainer>
					<Letters onLetterCountChange={handleLetterCountChange} />
				</TextContainer>
				<IconsContainer>
					<Screenshot />
					<Sound letterCount={letterCount} />
					<Credits onClick={handleCreditClick} openModal={openModal} />
					<FullScreen />
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

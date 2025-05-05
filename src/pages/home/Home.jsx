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
import Loader from "../../components/loader/Loader";

const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [letterCount, setLetterCount] = useState(0);
	const modalRef = useRef();
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleOutsideClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			setOpenModal(!openModal);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			const newWidth = window.innerWidth;
			const newHeight = window.innerHeight;

			setWindowSize({
				width: newWidth,
				height: newHeight,
			});

			document.documentElement.style.setProperty(
				"--windowHeight",
				`${newHeight}px`
			);
			document.documentElement.style.setProperty(
				"--windowWidth",
				`${newWidth}px`
			);

			window.addEventListener("resize", handleResize);
		};
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

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
		<>
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
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							position: "relative",
						}}
					>
						<IconsContainer
							className="icons-container"
							style={{ pointerEvents: "auto" }}
						>
							<Screenshot />
							<Sound letterCount={letterCount} />
							<Credits onClick={handleCreditClick} openModal={openModal} />
							<FullScreen />
						</IconsContainer>
					</div>
				</HomeInnerContainer>
			</Container>
		</>
	);
};

export default Home;

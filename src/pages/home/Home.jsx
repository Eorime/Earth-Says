import React, { useEffect, useRef, useState } from "react";
import {
	Container,
	Cursor,
	CursorContainer,
	EarthSaysText,
	HomeInnerContainer,
	IconsContainer,
	Prompt,
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
	const [isLoading, setIsLoading] = useState(true);
	const [showPrompt, setShowPrompt] = useState(false);
	const [cursorVisible, setCursorVisible] = useState(true);
	const hasModifier =
		event.ctrlKey || event.altKey || event.shiftKey || event.metaKey;

	const handleLoaderComplete = () => {
		setIsLoading(false);
		setShowPrompt(true);
	};

	// set up the cursor blinking effect
	useEffect(() => {
		if (!showPrompt) return;

		const cursorInterval = setInterval(() => {
			setCursorVisible((prev) => !prev);
		}, 500); // blink every 500ms

		return () => clearInterval(cursorInterval);
	}, [showPrompt]);

	// add keyboard event listener to hide prompt when any key is pressed
	useEffect(() => {
		if (!showPrompt) return;

		const handleKeyPress = (event) => {
			const validKeys = /^[a-zA-Z0-9,\.!\?;:"'\(\)<>]$/;

			if (validKeys.test(event.key) && !hasModifier) {
				setShowPrompt(false);
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [showPrompt]);

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
			{isLoading ? (
				<Loader onComplete={handleLoaderComplete} />
			) : (
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
							{showPrompt && (
								<CursorContainer>
									<Cursor visible={cursorVisible} />
									<Prompt>TYPE SOMETHING</Prompt>
								</CursorContainer>
							)}
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
			)}
		</>
	);
};

export default Home;

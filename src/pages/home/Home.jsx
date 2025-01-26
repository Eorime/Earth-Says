import React, { useState } from "react";
import {
	Circle,
	Container,
	EarthSaysText,
	fullscreen,
	FullScreenContainer,
	FullScreenDecrease,
	FullScreenIncrease,
	HomeInnerContainer,
	IconsContainer,
	Rectangle,
	screenshot,
	ScreenshotContainer,
	TextContainer,
} from "./style";
import Letters from "../../components/letters/Letters";

const Home = () => {
	const [fullScreen, setFullScreen] = useState(false);

	const handleFullScreen = () => {
		fullscreen();
		setFullScreen(!fullScreen);
	};

	return (
		<Container>
			<HomeInnerContainer>
				<EarthSaysText>EARTH SAYS</EarthSaysText>
				<TextContainer>
					<Letters />
				</TextContainer>
				<IconsContainer>
					<ScreenshotContainer onClick={screenshot}>
						<Rectangle>
							<Circle />
						</Rectangle>
					</ScreenshotContainer>
					<FullScreenContainer>
						{fullScreen ? (
							<FullScreenDecrease
								onClick={handleFullScreen}
							></FullScreenDecrease>
						) : (
							<FullScreenIncrease
								onClick={handleFullScreen}
							></FullScreenIncrease>
						)}
					</FullScreenContainer>
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

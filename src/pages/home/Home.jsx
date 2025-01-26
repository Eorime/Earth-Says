import React from "react";
import {
	Circle,
	Container,
	EarthSaysText,
	fullscreen,
	FullScreenContainer,
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
						<FullScreenIncrease onClick={fullscreen} />
					</FullScreenContainer>
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

import React from "react";
import {
	Circle,
	Container,
	EarthSaysText,
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
						<FullScreenIncrease />
					</FullScreenContainer>
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

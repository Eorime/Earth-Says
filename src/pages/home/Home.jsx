import React from "react";
import {
	Circle,
	Container,
	EarthSaysText,
	HomeInnerContainer,
	Rectangle,
	screenshot,
	ScreenshotContainer,
	TextContainer,
} from "./style";

const Home = () => {
	return (
		<Container>
			<HomeInnerContainer>
				<EarthSaysText>EARTH SAYS</EarthSaysText>
				<TextContainer></TextContainer>
				<ScreenshotContainer onClick={screenshot}>
					<Rectangle>
						<Circle />
					</Rectangle>
				</ScreenshotContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

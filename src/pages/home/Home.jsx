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
import Letters from "../../components/letters/Letters";

const Home = () => {
	return (
		<Container>
			<HomeInnerContainer>
				<EarthSaysText>EARTH SAYS</EarthSaysText>
				<TextContainer>
					<Letters />
				</TextContainer>
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

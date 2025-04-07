import React from "react";
import { Circle, Rectangle, screenshot, ScreenshotContainer } from "./style";

const Screenshot = () => {
	return (
		<ScreenshotContainer onClick={screenshot}>
			<Rectangle>
				<Circle />
			</Rectangle>
		</ScreenshotContainer>
	);
};

export default Screenshot;

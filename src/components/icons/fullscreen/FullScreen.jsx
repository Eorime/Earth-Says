import React, { useState } from "react";
import {
	fullscreen,
	FullScreenContainer,
	FullScreenDecrease,
	FullScreenIncrease,
} from "./style";

const FullScreen = () => {
	const [fullScreen, setFullScreen] = useState(false);

	const handleFullScreen = () => {
		fullscreen();
		setFullScreen(!fullScreen);
	};

	return (
		<FullScreenContainer>
			{fullScreen ? (
				<FullScreenDecrease onClick={handleFullScreen} />
			) : (
				<FullScreenIncrease onClick={handleFullScreen} />
			)}
		</FullScreenContainer>
	);
};

export default FullScreen;

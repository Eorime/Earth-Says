import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
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
	SoundContainer,
	TextContainer,
	TurnOffSound,
} from "./style";
import Letters from "../../components/letters/Letters";

const Home = () => {
	const [fullScreen, setFullScreen] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const waveRef = useRef(null);
	const svgRef = useRef(null);
	const animationsRef = useRef([]);

	const handleFullScreen = () => {
		fullscreen();
		setFullScreen(!fullScreen);
	};

	// setup wave points
	useEffect(() => {
		if (!waveRef.current) return;

		const wave = waveRef.current;
		const width = isHovering ? 40 : 20;
		const amplitude = isHovering ? 12 : 6;
		const segments = 20;
		const interval = width / segments;

		// clear existing points
		while (wave.points.length > 0) {
			wave.points.removeItem(0);
		}

		// create wave points
		for (let i = 0; i < segments; i++) {
			const norm = i / (segments - 1);
			const point = wave.ownerSVGElement.createSVGPoint();

			point.x = i * interval;
			point.y = (amplitude / 2) * Math.sin(norm * Math.PI * 2);

			wave.points.appendItem(point);

			//create animation
			const anim = gsap
				.to(point, 2, {
					y: -point.y,
					repeat: -1,
					yoyo: true,
					paused: true,
				})
				.progress(norm);

			animationsRef.current.push(anim);
		}

		return () => {
			animationsRef.current.forEach((anim) => anim.kill());
			animationsRef.current = [];
		};
	}, [isHovering]); // rerun when hover changes

	// hover
	useEffect(() => {
		if (isHovering) {
			animationsRef.current.forEach((anim) => anim.play());
		} else {
			animationsRef.current.forEach((anim) => anim.pause());
		}
	}, [isHovering]);

	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

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
							<FullScreenDecrease onClick={handleFullScreen} />
						) : (
							<FullScreenIncrease onClick={handleFullScreen} />
						)}
					</FullScreenContainer>
					<SoundContainer>
						<TurnOffSound
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<svg
								ref={svgRef}
								style={{
									width: "100%",
									height: "100%",
									transition: "all 0.3s ease-in-out", // match container transition
								}}
							>
								<g transform="translate(0, 10)">
									<polyline
										ref={waveRef}
										fill="none"
										stroke="rgb(102, 102, 102)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</TurnOffSound>
					</SoundContainer>
				</IconsContainer>
			</HomeInnerContainer>
		</Container>
	);
};

export default Home;

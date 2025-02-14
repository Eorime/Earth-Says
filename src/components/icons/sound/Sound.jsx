import React, { useEffect, useRef, useState } from "react";
import { SoundContainer, ToggleSound } from "./style";
import { gsap } from "gsap";

const Sound = () => {
	const [isHovering, setIsHovering] = useState(false);
	const [audio] = useState(() => {
		const audioElement = new Audio("/sounds/earth-says.mp3");
		audioElement.loop = true;

		audioElement.onerror = (e) => {
			console.error("Audio error:", e);
		};

		return audioElement;
	});
	const [isSoundOn, setIsSoundOn] = useState(false);
	const waveRef = useRef(null);
	const svgRef = useRef(null);
	const animationsRef = useRef([]);
	const flatteningAnimationRef = useRef(null);

	const createWavePoints = (wave, width, amplitude, segments) => {
		const interval = width / (segments - 1);
		const points = [];

		for (let i = 0; i < segments; i++) {
			const norm = i / (segments - 1);
			const point = wave.ownerSVGElement.createSVGPoint();

			point.x = i * interval;
			point.y = amplitude * Math.sin(norm * Math.PI * 4);

			wave.points.appendItem(point);
			points.push(point);
		}

		return points;
	};

	// setup wave points
	useEffect(() => {
		if (!waveRef.current) return;

		const wave = waveRef.current;
		const width = 42;
		const amplitude = isSoundOn ? (isHovering ? 8 : 12) : 0;
		const segments = 210;

		while (wave.points.length > 0) {
			wave.points.removeItem(0);
		}

		animationsRef.current.forEach((anim) => anim.kill());
		animationsRef.current = [];
		if (flatteningAnimationRef.current) {
			flatteningAnimationRef.current.kill();
		}

		const points = createWavePoints(wave, width, amplitude, segments);

		if (isSoundOn) {
			points.forEach((point, i) => {
				const norm = i / (segments - 1);
				const anim = gsap
					.to(point, 1, {
						y: -point.y,
						repeat: -1,
						yoyo: true,
						paused: true,
						ease: "linear",
					})
					.progress(norm);

				animationsRef.current.push(anim);
			});
		}

		return () => {
			animationsRef.current.forEach((anim) => anim.kill());
			animationsRef.current = [];
			if (flatteningAnimationRef.current) {
				flatteningAnimationRef.current.kill();
			}
		};
	}, [isHovering, isSoundOn]);

	const handleSoundToggle = () => {
		if (isSoundOn) {
			const wave = waveRef.current;
			const points = Array.from(wave.points);

			animationsRef.current.forEach((anim) => anim.pause());
			audio.pause(); // pause audio

			flatteningAnimationRef.current = gsap.to(points, {
				y: 0,
				duration: 0.2,
				ease: "power2.inOut",
				stagger: {
					amount: 0.1,
					from: "center",
				},
				onComplete: () => {
					setIsSoundOn(false);
				},
			});
		} else {
			setIsSoundOn(true);
			audio.play(); // play audio
		}
	};

	// hover effect
	useEffect(() => {
		if (isHovering && isSoundOn) {
			animationsRef.current.forEach((anim) => anim.play());
		} else {
			animationsRef.current.forEach((anim) => anim.pause());
		}
	}, [isHovering, isSoundOn]);

	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	return (
		<SoundContainer>
			<ToggleSound
				onClick={handleSoundToggle}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<svg
					ref={svgRef}
					style={{
						width: "100%",
						height: "100%",
						transition: "all 0.3s ease-in-out",
					}}
				>
					<g transform="translate(-1, 11)">
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
			</ToggleSound>
		</SoundContainer>
	);
};

export default Sound;

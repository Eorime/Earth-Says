import React, { useEffect, useRef, useState } from "react";
import { SoundContainer, ToggleSound } from "./style";
import { gsap } from "gsap";

const Sound = ({ letterCount = 0 }) => {
	const [isHovering, setIsHovering] = useState(false);
	const [isSoundOn, setIsSoundOn] = useState(false);
	const [hasUserInteracted, setHasUserInteracted] = useState(false);
	const waveRef = useRef(null);
	const svgRef = useRef(null);
	const animationsRef = useRef([]);
	const flatteningAnimationRef = useRef(null);
	const audioElementRef = useRef(null);
	const prevLetterCountRef = useRef(letterCount);

	// handle initial user interaction
	useEffect(() => {
		const handleFirstInteraction = () => {
			setHasUserInteracted(true);
			// remove event listeners after first interaction
			document.removeEventListener("click", handleFirstInteraction);
			document.removeEventListener("keydown", handleFirstInteraction);
		};

		document.addEventListener("click", handleFirstInteraction);
		document.addEventListener("keydown", handleFirstInteraction);

		return () => {
			document.removeEventListener("click", handleFirstInteraction);
			document.removeEventListener("keydown", handleFirstInteraction);
		};
	}, []);

	// Automatically start sound and enable sound on when letter count changes
	useEffect(() => {
		if (
			!isSoundOn &&
			hasUserInteracted &&
			letterCount > 0 &&
			letterCount > prevLetterCountRef.current
		) {
			// Automatically turn on sound and start playing
			setIsSoundOn(true);
			playSound();
		}
		prevLetterCountRef.current = letterCount;
	}, [letterCount, isSoundOn, hasUserInteracted]);

	// update volume based on letter count
	useEffect(() => {
		if (audioElementRef.current) {
			// calculate volume based on letter count
			const baseVolume = 0;
			const maxVolumeIncrease = 1;
			const maxLettersForFullVolume = 50;

			const volumeIncrease =
				Math.min(letterCount / maxLettersForFullVolume, 1) * maxVolumeIncrease;
			const newVolume = baseVolume + volumeIncrease;

			// set the volume
			audioElementRef.current.volume = Math.min(Math.max(newVolume, 0), 1);
			console.log(
				`Volume set to ${audioElementRef.current.volume} based on ${letterCount} letters`
			);
		}
	}, [letterCount]);

	const playSound = () => {
		if (audioElementRef.current && hasUserInteracted) {
			// only attempt to play if not already playing
			if (audioElementRef.current.paused) {
				audioElementRef.current
					.play()
					.then(() => console.log("Audio started successfully"))
					.catch((err) => console.error("Audio play failed:", err));
			}
		}
	};

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

	// setup wave animation
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

			// start animations if sound is on
			animationsRef.current.forEach((anim) => anim.play());
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
		setHasUserInteracted(true);

		if (isSoundOn) {
			// turn sound off
			if (audioElementRef.current) {
				audioElementRef.current.pause();
			}

			// immediately stop and reset all animations
			animationsRef.current.forEach((anim) => anim.kill());
			if (flatteningAnimationRef.current) {
				flatteningAnimationRef.current.kill();
			}

			// immediately reset wave points to zero
			const wave = waveRef.current;
			if (wave) {
				while (wave.points.length > 0) {
					wave.points.removeItem(0);
				}
			}

			// instantly set state to off
			setIsSoundOn(false);
		} else {
			// turn sound on
			setIsSoundOn(true);

			// always try to play, ignoring letter count
			if (audioElementRef.current) {
				audioElementRef.current
					.play()
					.then(() => console.log("audio started successfully"))
					.catch((error) => {
						console.error("error playing audio:", error);
						// try muted first to bypass autoplay restrictions
						audioElementRef.current.muted = true;
						audioElementRef.current.play().then(() => {
							audioElementRef.current.muted = false;
						});
					});
			}
		}
	};

	// handle hover effect for animations
	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	return (
		<SoundContainer>
			{/* hidden audio element that's controlled directly */}
			<audio
				ref={audioElementRef}
				src="/sounds/wind.wav"
				loop
				preload="auto"
				style={{ display: "none" }}
			/>

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

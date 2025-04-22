import React, { useEffect, useRef, useState } from "react";
import { SoundContainer, ToggleSound } from "./style";
import { gsap } from "gsap";

const Sound = ({ letterCount = 0 }) => {
	const [isHovering, setIsHovering] = useState(false);
	const [isSoundOn, setIsSoundOn] = useState(false);
	const [hasUserInteracted, setHasUserInteracted] = useState(false);
	const waveRef = useRef(null);
	const svgRef = useRef(null);
	const waveAnimationRef = useRef(null);
	const audioElementRef = useRef(null);
	const prevLetterCountRef = useRef(letterCount);
	const hasLettersRef = useRef(letterCount > 0);

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

	// Automatically start sound and enable sound on when letterCount changes from 0 to positive
	useEffect(() => {
		const wasEmpty = !hasLettersRef.current;
		const isEmpty = letterCount === 0;
		const hasLettersNow = letterCount > 0;

		// Update our ref to track letter state
		hasLettersRef.current = hasLettersNow;

		// Only respond to transitions between empty and non-empty
		if (wasEmpty && hasLettersNow && hasUserInteracted) {
			// Going from 0 letters to some letters
			setIsSoundOn(true);
			playSound();
			updateWaveAnimation(true);
		} else if (!wasEmpty && isEmpty) {
			// Going from some letters to 0 letters
			if (audioElementRef.current) {
				audioElementRef.current.pause();
				setIsSoundOn(false);
				updateWaveAnimation(false);
			}
		}

		prevLetterCountRef.current = letterCount;
	}, [letterCount, hasUserInteracted]);

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

	const createWavePoints = (wave, width, segments) => {
		const interval = width / (segments - 1);
		const points = [];

		for (let i = 0; i < segments; i++) {
			const point = wave.ownerSVGElement.createSVGPoint();
			point.x = i * interval;
			point.y = 0; // Initial flat state
			wave.points.appendItem(point);
			points.push(point);
		}

		return points;
	};

	// A function to update the wave animation with varying wave heights
	const updateWaveAnimation = (shouldAnimate) => {
		if (!waveRef.current) return;

		// Clean up previous animations
		if (waveAnimationRef.current) {
			waveAnimationRef.current.kill();
		}

		const wave = waveRef.current;
		const width = 50;
		const baseAmplitude = shouldAnimate ? (isHovering ? 3 : 4) : 0;
		const segments = 180;

		// Clear existing points
		while (wave.points.length > 0) {
			wave.points.removeItem(0);
		}

		// Create initial points
		const points = createWavePoints(wave, width, segments);

		// Only animate if we should show waves
		if (shouldAnimate && letterCount > 0 && isSoundOn) {
			// Animation data with simple phase
			const animContext = {
				phase: 0,
				secondaryPhase: 0,
			};

			// Animate the phase
			waveAnimationRef.current = gsap.to(animContext, {
				phase: 2 * Math.PI,
				secondaryPhase: 4 * Math.PI, // Different speed for amplitude modulation
				duration: 2,
				repeat: -1,
				ease: "none",
				onUpdate: function () {
					const currentPhase = this.targets()[0].phase;
					const secondaryPhase = this.targets()[0].secondaryPhase;

					for (let i = 0; i < points.length; i++) {
						const norm = i / (segments - 1);

						// Create a spatial amplitude modulation
						// This creates "waves of waves" - higher waves in some areas, lower in others
						const amplitudeModulation =
							0.3 + Math.sin(norm * 3 + secondaryPhase * 0.5) * 0.5 + 0.7;

						// Apply both the primary wave and the amplitude modulation
						points[i].y =
							baseAmplitude *
							amplitudeModulation *
							Math.sin(norm * Math.PI * 5 - currentPhase);
					}
				},
			});
		} else {
			// If sound is off or no letters, create flat line (zero amplitude)
			createWavePoints(wave, width, segments);
		}
	};

	// Setup wave animation initially and on hover state change
	useEffect(() => {
		updateWaveAnimation(letterCount > 0 && isSoundOn);

		return () => {
			if (waveAnimationRef.current) {
				waveAnimationRef.current.kill();
			}
		};
	}, [isHovering, isSoundOn]);

	const handleSoundToggle = () => {
		setHasUserInteracted(true);
		const newSoundState = !isSoundOn;

		if (!newSoundState) {
			// Turn sound off
			if (audioElementRef.current) {
				audioElementRef.current.pause();
			}
			updateWaveAnimation(false);
		} else if (letterCount > 0) {
			// Only turn sound on if there are letters
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
			updateWaveAnimation(true);
		}

		setIsSoundOn(newSoundState);
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

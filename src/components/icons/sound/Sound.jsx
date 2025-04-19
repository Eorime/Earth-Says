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

	// Create semi-random values for a more natural soundwave effect
	const createSoundwavePattern = (count, baseAmplitude) => {
		// Seed values to ensure pattern
		const pattern = [];

		// Generate a pattern with some randomness but still smooth transitions
		for (let i = 0; i < count; i++) {
			// Create some variation that will make the soundwave look natural
			// Mix multiple frequencies for realistic audio visualization
			const value =
				Math.sin(i * 0.4) * 0.5 +
				Math.sin(i * 0.8) * 0.3 +
				Math.sin(i * 1.2) * 0.2;

			pattern.push(value * baseAmplitude);
		}

		return pattern;
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

	// A function to update the wave animation to look like a soundwave
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
			// Generate pattern values that resemble audio waveforms
			const patternLength = 30; // Number of distinct pattern values
			const pattern = createSoundwavePattern(patternLength, baseAmplitude);

			// Animation data
			const animContext = {
				offset: 0,
				amp: baseAmplitude,
				intensity: Math.min(0.5 + letterCount / 100, 1), // Intensity based on letter count
			};

			// Animate parameters
			waveAnimationRef.current = gsap.to(animContext, {
				offset: patternLength, // Move through the pattern
				duration: 2,
				repeat: -1,
				ease: "none",
				onUpdate: function () {
					// Get current animation progress
					const offset = this.targets()[0].offset % patternLength;
					const intensity = this.targets()[0].intensity;

					// Update each point
					for (let i = 0; i < points.length; i++) {
						// Create a wrapped index into our pattern array
						const patternIndex = Math.floor((i + offset) % patternLength);

						// Get base value from pattern
						let value = pattern[patternIndex];

						// Add slight variation based on position
						const positionVariation =
							Math.sin(i * 0.05 + Date.now() * 0.001) * 0.3;

						// Add small random component for realism (minimal jitter)
						const jitter = (Math.random() * 0.4 - 0.2) * intensity;

						// Combine all factors
						points[i].y = value + positionVariation + jitter;
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

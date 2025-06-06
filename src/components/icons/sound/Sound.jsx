import React, { useEffect, useRef, useState } from "react";
import { SoundContainer, ToggleSound } from "./style";
import { gsap } from "gsap";

const Sound = ({ letterCount = 0 }) => {
	const [isHovering, setIsHovering] = useState(false);
	const [isSoundOn, setIsSoundOn] = useState(false);
	const [hasUserInteracted, setHasUserInteracted] = useState(false);
	const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
	const waveRef = useRef(null);
	const svgRef = useRef(null);
	const animationsRef = useRef([]);
	const audioElementRef = useRef(null);
	const clickAudioRef = useRef(null);
	const prevLetterCountRef = useRef(letterCount);
	const hasLettersRef = useRef(letterCount > 0);

	const soundsArray = [
		"/sounds/sound1.mp3",
		"/sounds/sound2.mp3",
		"/sounds/sound3.mp3",
		"/sounds/sound4.mp3",
		"/sounds/sound5.mp3",
	];

	const clickSounds = ["sounds/click/on.mp3", "sounds/click/off.mp3"];

	//click function
	const playClick = (isKeyDown) => {
		if (!hasUserInteracted || !clickAudioRef.current) {
			return;
		}

		const soundIndex = isKeyDown ? 0 : 1;

		clickAudioRef.current.src = clickSounds[soundIndex];
		clickAudioRef.current.volume = 0.5;

		clickAudioRef.current
			.play()
			.then(() => console.log())
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (clickAudioRef.current) {
			clickAudioRef.current.src = clickSounds[0];
		}
	}, []);

	//manage click state
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (
				event.repeat ||
				[
					"Shift",
					"Control",
					"Alt",
					"Meta",
					"CapsLock",
					"Enter",
					"Escape",
					"[",
					"]",
					"`",
					"Tab",
				].includes(event.key)
			) {
				return;
			}
			playClick(true);
		};

		const handleKeyUp = (event) => {
			if (
				[
					"Shift",
					"Control",
					"Alt",
					"Meta",
					"CapsLock",
					"Enter",
					"Escape",
					"[",
					"]",
					"`",
					"Tab",
				].includes(event.key)
			) {
				return;
			}
			playClick(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, [hasUserInteracted]);

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

	// automatically start sound and enable sound on when letterCount changes from 0 to positive
	useEffect(() => {
		const wasEmpty = !hasLettersRef.current;
		const isEmpty = letterCount === 0;
		const hasLettersNow = letterCount > 0;

		// update our ref to track letter state
		hasLettersRef.current = hasLettersNow;

		// only respond to transitions between empty and non-empty
		if (wasEmpty && hasLettersNow && hasUserInteracted) {
			// going from 0 letters to some
			setIsSoundOn(true);
			rotateToNextSound();
			playSound();
			updateWaveAnimation(true, false);
		} else if (!wasEmpty && isEmpty) {
			if (audioElementRef.current) {
				audioElementRef.current.pause();
				setIsSoundOn(false);
				updateWaveAnimation(false, false);
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
			const maxLettersForFullVolume = 10;

			const volumeIncrease =
				Math.min(letterCount / maxLettersForFullVolume, 1) * maxVolumeIncrease;
			const newVolume = baseVolume + volumeIncrease;

			// set the volume
			audioElementRef.current.volume = Math.min(Math.max(newVolume, 0), 1);
		}
	}, [letterCount]);

	// Rotate to the next sound in the array
	const rotateToNextSound = () => {
		const nextIndex = (currentSoundIndex + 1) % soundsArray.length;
		setCurrentSoundIndex(nextIndex);

		// Update audio source if the element exists
		if (audioElementRef.current) {
			audioElementRef.current.src = soundsArray[nextIndex];
		}
	};

	const playSound = () => {
		if (audioElementRef.current && hasUserInteracted) {
			// only attempt to play if not already playing
			if (audioElementRef.current.paused) {
				audioElementRef.current
					.play()
					.then(() => console.log("hi :3"))
					.catch((err) => console.error(err));
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
			point.y = -(amplitude * Math.sin(norm * Math.PI * 7));

			wave.points.appendItem(point);
			points.push(point);
		}

		return points;
	};

	// a function to update the wave animation without recreating it on every letter count change
	const updateWaveAnimation = (shouldShow, shouldAnimate) => {
		if (!waveRef.current) return;

		animationsRef.current.forEach((anim) => anim.kill());
		animationsRef.current = [];

		const wave = waveRef.current;
		const width = 50;
		const amplitude = shouldShow ? 4 : 0;
		const segments = 210;

		while (wave.points.length > 0) {
			wave.points.removeItem(0);
		}

		// create points - static if not animating, animated if hovering
		const points = createWavePoints(wave, width, amplitude, segments);

		if (shouldShow && shouldAnimate && letterCount > 0 && isSoundOn) {
			const timeline = gsap.timeline({
				repeat: -1,
				defaults: { ease: "linear" },
			});

			const phaseShifts = [];

			points.forEach((point, i) => {
				const norm = i / (segments - 1);

				const phaseShift = gsap.to(
					{},
					{
						duration: 1,
						onUpdate: function () {
							const phase = -this.progress() * Math.PI * 2;
							point.y = -(amplitude * Math.sin(norm * Math.PI * 7 + phase));
						},
						repeat: -1,
					}
				);

				phaseShifts.push(phaseShift);
			});

			animationsRef.current = phaseShifts;
		}
	};

	// setup wave animation initially and on hover state change
	useEffect(() => {
		// Only animate when hovering
		updateWaveAnimation(letterCount > 0 && isSoundOn, isHovering);

		return () => {
			animationsRef.current.forEach((anim) => anim.kill());
			animationsRef.current = [];
		};
	}, [isHovering, isSoundOn, letterCount]);

	const handleSoundToggle = () => {
		setHasUserInteracted(true);
		const newSoundState = !isSoundOn;

		if (!newSoundState) {
			// Turn sound off
			if (audioElementRef.current) {
				audioElementRef.current.pause();
			}
			updateWaveAnimation(false, false);
		} else if (letterCount > 0) {
			// Only turn sound on if there are letters
			// Rotate to next sound when manually turning on
			rotateToNextSound();

			if (audioElementRef.current) {
				audioElementRef.current
					.play()
					.then(() => console.log())
					.catch((error) => {
						console.error("error playing audio:", error);
						// try muted first to bypass autoplay restrictions
						audioElementRef.current.muted = true;
						audioElementRef.current.play().then(() => {
							audioElementRef.current.muted = false;
						});
					});
			}
			// Show the wave but don't animate unless hovered
			updateWaveAnimation(true, isHovering);
		}

		setIsSoundOn(newSoundState);
	};

	// handle hover effect for animations
	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	return (
		<SoundContainer>
			{/* hidden audio element that's controlled directly */}
			<audio
				ref={audioElementRef}
				src={soundsArray[1]}
				loop
				preload="auto"
				style={{ display: "none" }}
			/>

			{/* Separate audio element for click sounds */}
			<audio ref={clickAudioRef} preload="auto" style={{ display: "none" }} />

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
							strokeWidth="1.8"
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

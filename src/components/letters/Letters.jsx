import React, { useState, useEffect, useRef } from "react";
import {
	Container,
	DisplayContainer,
	LetterBox,
	LetterImage,
	LettersDisplay,
	LettersRow,
} from "./style";

const Letters = ({ onLetterCountChange }) => {
	const [lines, setLines] = useState([[], [], [], [], []]);
	const [currentLine, setCurrentLine] = useState(0);
	const [totalLetterCount, setTotalLetterCount] = useState(0);
	const MAX_LETTERS = 50;
	const inputRef = useRef(null);

	const letterImage = {
		A: "xelp",
		B: "letters/B.png",
		C: "letters/C.png",
		D: "letters/D.png",
		E: "letters/E.png",
		F: "letters/F.png",
		G: "letters/G.png",
		H: "letters/H.png",
		I: "letters/I.png",
		J: "letters/J.png",
		K: "letters/K.png",
		L: "letters/L.png",
		M: "letters/M.png",
		N: "letters/N.png",
		O: "letters/O.png",
		P: "letters/P.png",
		Q: "letters/Q.png",
		R: "letters/R.png",
		S: "letters/S.png",
		T: "letters/T.png",
		U: "letters/U.png",
		V: "letters/V.png",
		W: "letters/W.png",
		X: "letters/X.png",
		Y: "letters/Y.png",
		Z: "letters/Z.png",
	};

	useEffect(() => {
		const count = lines.reduce((total, line) => {
			return total + line.filter((char) => char !== " ").length;
		}, 0);

		setTotalLetterCount(count);

		if (onLetterCountChange) {
			onLetterCountChange(count);
		}
	}, [lines, onLetterCountChange]);

	const handleInputChange = (e) => {
		const value = e.target.value;
		if (value) {
			const lastChar = value.slice(-1).toUpperCase();

			const currentLetterCount = totalLetterCount;
			const wouldAddLetter = lastChar.match(/[A-Z]/);

			if (wouldAddLetter && currentLetterCount >= MAX_LETTERS) {
				e.target.value = "";
				return;
			}

			if (lastChar.match(/[A-Z]/)) {
				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [...newLines[currentLine], lastChar];
					return newLines;
				});
			} else if (lastChar === " ") {
				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [...newLines[currentLine], " "];
					return newLines;
				});
			}
			e.target.value = "";
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (currentLine < 4) {
				setCurrentLine((prev) => prev + 1);
			}
		} else if (e.key === "Backspace" && e.target.value === "") {
			e.preventDefault();
			setLines((prev) => {
				const newLines = [...prev];
				if (newLines[currentLine].length > 0) {
					newLines[currentLine] = newLines[currentLine].slice(0, -1);
				} else if (currentLine > 0) {
					setCurrentLine(currentLine - 1);
				}
				return newLines;
			});
		}
	};

	const handleContainerClick = () => {
		inputRef.current?.focus();
	};

	useEffect(() => {
		// handle physical keyboard events
		const handleKeyDown = (e) => {
			if (e.key === "Control" || e.key === "Shift") {
				return;
			}
			if (e.ctrlKey || e.shiftKey) {
				return;
			}

			if (e.key === "Enter") {
				e.preventDefault();
				if (currentLine < 4) {
					setCurrentLine((prev) => prev + 1);
				}
			} else if (e.key === "Backspace") {
				e.preventDefault();
				setLines((prev) => {
					const newLines = [...prev];
					if (newLines[currentLine].length > 0) {
						newLines[currentLine] = newLines[currentLine].slice(0, -1);
					} else if (currentLine > 0) {
						setCurrentLine(currentLine - 1);
					}
					return newLines;
				});
			} else if (e.key === " ") {
				e.preventDefault();
				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [...newLines[currentLine], " "];
					return newLines;
				});
			} else if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
				e.preventDefault();

				if (totalLetterCount >= MAX_LETTERS) {
					return;
				}

				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [
						...newLines[currentLine],
						e.key.toUpperCase(),
					];
					return newLines;
				});
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentLine, totalLetterCount]);

	return (
		<Container onClick={handleContainerClick}>
			<input
				ref={inputRef}
				type="text"
				style={{
					position: "fixed",
					top: "-1000px",
					left: "-1000px",
					opacity: 0,
					pointerEvents: "none",
					height: 0,
					width: 0,
					padding: 0,
					margin: 0,
					border: "none",
				}}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				autoCapitalize="characters"
				autoComplete="off"
				autoCorrect="off"
			/>
			<DisplayContainer>
				{lines.map((line, lineIndex) => (
					<LettersRow key={lineIndex}>
						<LettersDisplay>
							{line.map((letter, letterIndex) => (
								<LetterBox key={letterIndex}>
									{letter !== " " && letterImage[letter] && (
										<LetterImage
											src={letterImage[letter]}
											alt={`Letter ${letter}`}
										/>
									)}
									{letter === " " && (
										<div style={{ width: "4rem", height: "4rem" }} />
									)}
								</LetterBox>
							))}
						</LettersDisplay>
					</LettersRow>
				))}
			</DisplayContainer>
		</Container>
	);
};

export default Letters;

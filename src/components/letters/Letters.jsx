import React from "react";
import {
	Container,
	DisplayContainer,
	LetterBox,
	LetterImage,
	LettersDisplay,
	LettersRow,
} from "./style";
import { useState, useEffect } from "react";

const Letters = () => {
	const [lines, setLines] = useState([[], [], [], [], []]);
	const [currentLine, setCurrentLine] = useState(0);

	const letterImage = {
		A: "letters/A.png",
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
		const handleKeyDown = (e) => {
			// ignore modifier keys (standalone)
			if (e.key === "Control" || e.key === "Shift") {
				return;
			}

			// ignore key combinations with ctrl and shift
			if (e.ctrlKey || e.shiftKey) {
				return;
			}

			// handle enter key for line breaks
			if (e.key === "Enter") {
				e.preventDefault();
				if (currentLine < 4) {
					setCurrentLine((prev) => prev + 1);
				}
				return;
			}

			// handle backspace
			if (e.key === "Backspace") {
				e.preventDefault();
				setLines((prev) => {
					const newLines = [...prev];
					if (newLines[currentLine].length > 0) {
						// remove last character from current line
						newLines[currentLine] = newLines[currentLine].slice(0, -1);
					} else if (currentLine > 0) {
						// move to previous line if current line is empty
						setCurrentLine(currentLine - 1);
					}
					return newLines;
				});
			}
			// handle letters
			else if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
				e.preventDefault();
				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [
						...newLines[currentLine],
						e.key.toUpperCase(),
					];
					return newLines;
				});
			}
			// handle space
			else if (e.key === " ") {
				e.preventDefault();
				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [...newLines[currentLine], " "];
					return newLines;
				});
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [currentLine]);

	return (
		<Container>
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

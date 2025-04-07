import React, { useState, useEffect, useRef } from "react";
import {
	Container,
	DisplayContainer,
	LetterBox,
	LetterImage,
	LettersDisplay,
	LettersRow,
} from "./style";
import A1 from "../../assets/Letters/A_3.5541800, 72.8948102.jpg";
import A2 from "../../assets/Letters/A_52.7601911, -58.9153406.jpg";
import A3 from "../../assets/Letters/A_70.7922929, 25.0477358.jpg";
import B1 from "../../assets/Letters/B_4.0181399, 72.7203981.jpg";
import B2 from "../../assets/Letters/B_28.9749210, 33.5712757.jpg";
import C1 from "../../assets/Letters/C_-3.8955759, -66.4168077.jpg";
import C2 from "../../assets/Letters/C_-6.9703333, -71.2585275.jpg";
import C3 from "../../assets/Letters/C_51.1128311, 99.3406641.jpg";
import D1 from "../../assets/Letters/D_4.1683668, 72.8354062.jpg";
import D2 from "../../assets/Letters/D_5.7019754, 73.2801138.jpg";
import D3 from "../../assets/Letters/D_59.3942262, -111.3870321.jpg";
import E1 from "../../assets/Letters/E_-8.3284316, 15.0832086.jpg";
import E2 from "../../assets/Letters/E_44.7583481, -119.8783178.jpg";
import E3 from "../../assets/Letters/E_69.3277110, 94.7593975.jpg";
import F1 from "../../assets/Letters/F_38.3733335, 42.6669170.jpg";
import G1 from "../../assets/Letters/G_-1.8998862, -44.5969186.jpg";
import G2 from "../../assets/Letters/G_6.1066431, 73.2858534.jpg";
import H1 from "../../assets/Letters/H_-0.8541393, -50.9045274.jpg";
import H2 from "../../assets/Letters/H_50.3667670, -91.1630109.jpg";
import H3 from "../../assets/Letters/H_53.7340403, -57.4580391.jpg";
import H4 from "../../assets/Letters/H_56.0969715, -79.7757337.jpg";
import I1 from "../../assets/Letters/I_21.3762145, -71.1215883.jpg";
import I2 from "../../assets/Letters/I_23.7953479, -76.1355714.jpg";
import I3 from "../../assets/Letters/I_50.3472732, -91.1818131.jpg";
import J1 from "../../assets/Letters/J_-27.1616573, 142.0421750.jpg";
import J2 from "../../assets/Letters/J_51.1466270, 99.4737983.jpg";
import K1 from "../../assets/Letters/K_-16.0822796, 125.2296141.jpg";
import K2 from "../../assets/Letters/K_27.7049681, 35.6274290.jpg";
import K3 from "../../assets/Letters/K_31.1440814, 57.5221174.jpg";

const Letters = ({ onLetterCountChange }) => {
	const [lines, setLines] = useState([[], [], [], [], []]);
	const [currentLine, setCurrentLine] = useState(0);
	const [totalLetterCount, setTotalLetterCount] = useState(0);
	const MAX_LETTERS = 50;
	const inputRef = useRef(null);

	// arrays of images for each letter
	const letterImages = {
		A: [A1, A2, A3],
		B: [B1, B2],
		C: [C1, C2, C3],
		D: [D1, D2, D3],
		E: [E1, E2, E3],
		F: [F1],
		G: [G1, G2],
		H: [H1, H2, H3, H4],
		I: [I1, I2, I3],
		J: ["letters/J.png"],
		K: ["letters/K.png"],
		L: ["letters/L.png"],
		M: ["letters/M.png"],
		N: ["letters/N.png"],
		O: ["letters/O.png"],
		P: ["letters/P.png"],
		Q: ["letters/Q.png"],
		R: ["letters/R.png"],
		S: ["letters/S.png"],
		T: ["letters/T.png"],
		U: ["letters/U.png"],
		V: ["letters/V.png"],
		W: ["letters/W.png"],
		X: ["letters/X.png"],
		Y: ["letters/Y.png"],
		Z: ["letters/Z.png"],
	};

	// select a random image for a letter and store it with the letter
	const assignRandomImage = (letter) => {
		if (!letterImages[letter] || letterImages[letter].length === 0) {
			return { char: letter, id: Date.now(), imageSrc: null };
		}
		const randomIndex = Math.floor(Math.random() * letterImages[letter].length);
		return {
			char: letter,
			id: Date.now(),
			imageSrc: letterImages[letter][randomIndex],
		};
	};

	useEffect(() => {
		const count = lines.reduce((total, line) => {
			return total + line.filter((charObj) => charObj.char !== " ").length;
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
					// create a letter object with a pre-assigned random image
					const letterWithImage = assignRandomImage(lastChar);
					newLines[currentLine] = [...newLines[currentLine], letterWithImage];
					return newLines;
				});
			} else if (lastChar === " ") {
				setLines((prev) => {
					const newLines = [...prev];
					newLines[currentLine] = [
						...newLines[currentLine],
						{ char: " ", id: Date.now(), imageSrc: null },
					];
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
					newLines[currentLine] = [
						...newLines[currentLine],
						{ char: " ", id: Date.now(), imageSrc: null },
					];
					return newLines;
				});
			} else if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
				e.preventDefault();

				if (totalLetterCount >= MAX_LETTERS) {
					return;
				}

				setLines((prev) => {
					const newLines = [...prev];
					const upperChar = e.key.toUpperCase();
					// Create a letter object with a pre-assigned random image
					const letterWithImage = assignRandomImage(upperChar);
					newLines[currentLine] = [...newLines[currentLine], letterWithImage];
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
							{line.map((letterObj) => (
								<LetterBox key={letterObj.id}>
									{letterObj.char !== " " && letterObj.imageSrc && (
										<LetterImage
											src={letterObj.imageSrc}
											alt={`Letter ${letterObj.char}`}
										/>
									)}
									{letterObj.char === " " && (
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

import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
} from "react";
import {
	Container,
	DisplayContainer,
	LetterBox,
	LetterImage,
	LettersDisplay,
	LettersRow,
	SpaceBox,
} from "./style";

const createImagePath = (folder, filename) => `/${folder}/${filename}`;

export const letterImages = {
	A: [
		createImagePath("Letters", "A_3.5541800, 72.8948102.webp"),
		createImagePath("Letters", "A_52.7601911, -58.9153406.webp"),
		createImagePath("Letters", "A_70.7922929, 25.0477358.webp"),
	],
	B: [
		createImagePath("Letters", "B_4.0181399, 72.7203981.webp"),
		createImagePath("Letters", "B_28.9749210, 33.5712757.webp"),
	],
	C: [
		createImagePath("Letters", "C_-3.8955759, -66.4168077.webp"),
		createImagePath("Letters", "C_-6.9703333, -71.2585275.webp"),
		createImagePath("Letters", "C_51.1128311, 99.3406641.webp"),
	],
	D: [
		createImagePath("Letters", "D_4.1683668, 72.8354062.webp"),
		createImagePath("Letters", "D_5.7019754, 73.2801138.webp"),
		createImagePath("Letters", "D_59.3942262, -111.3870321.webp"),
	],
	E: [
		createImagePath("Letters", "E_-8.3284316, 15.0832086.webp"),
		createImagePath("Letters", "E_44.7583481, -119.8783178.webp"),
		createImagePath("Letters", "E_69.3277110, 94.7593975.webp"),
	],
	F: [createImagePath("Letters", "F_38.3733335, 42.6669170.webp")],
	G: [
		createImagePath("Letters", "G_-1.8998862, -44.5969186.webp"),
		createImagePath("Letters", "G_6.1066431, 73.2858534.webp"),
	],
	H: [
		createImagePath("Letters", "H_50.3667670, -91.1630109.webp"),
		createImagePath("Letters", "H_53.7340403, -57.4580391.webp"),
		createImagePath("Letters", "H_56.0969715, -79.7757337.webp"),
	],
	I: [
		createImagePath("Letters", "I_21.3762145, -71.1215883.webp"),
		createImagePath("Letters", "I_23.7953479, -76.1355714.webp"),
		createImagePath("Letters", "I_50.3472732, -91.1818131.webp"),
	],
	J: [
		createImagePath("Letters", "J_-27.1616573, 142.0421750.webp"),
		createImagePath("Letters", "J_51.1466270, 99.4737983.webp"),
	],
	K: [
		createImagePath("Letters", "K_-16.0822796, 125.2296141.webp"),
		createImagePath("Letters", "K_27.7049681, 35.6274290.webp"),
		createImagePath("Letters", "K_31.1440814, 57.5221174.webp"),
	],
	L: [
		createImagePath("Letters", "L_-8.3314600, 15.0973210.webp"),
		createImagePath("Letters", "L_-15.6106414, 136.3288146.webp"),
		createImagePath("Letters", "L_61.0473425, -101.3786237.webp"),
	],
	M: [
		createImagePath("Letters", "M_-17.859961, 125.264890.webp"),
		createImagePath("Letters", "M_12.0851075, -84.2286402.webp"),
		createImagePath("Letters", "M_56.0943874, -115.7551848.webp"),
	],
	N: [
		createImagePath("Letters", "N_-17.8598312, 125.2576030.webp"),
		createImagePath("Letters", "N_32.5769955, 56.5787235.webp"),
		createImagePath("Letters", "N_66.7623736, -84.6549331.webp"),
	],
	O: [
		createImagePath("Letters", "O_-8.3260424, 15.0649766.webp"),
		createImagePath("Letters", "O_3.1646228, 72.8981555.webp"),
		createImagePath("Letters", "O_3.4006072, 73.6082539.webp"),
	],
	P: [
		createImagePath("Letters", "P_-4.1617897, 121.5130135.webp"),
		createImagePath("Letters", "P_50.6516071, -91.2194814.webp"),
		createImagePath("Letters", "P_69.812115, 18.861134.webp"),
	],
	Q: [
		createImagePath("Letters", "Q_0.7922795, 128.4271378.webp"),
		createImagePath("Letters", "Q_69.309231, 70.722114.webp"),
	],
	R: [
		createImagePath("Letters", "R_38.4396484, -109.7301069.webp"),
		createImagePath("Letters", "R_38.5944012, -110.0468744.webp"),
		createImagePath("Letters", "R_51.1392961, 99.4220075.webp"),
	],
	S: [
		createImagePath("Letters", "S_-4.5016261, -71.3982632.webp"),
		createImagePath("Letters", "S_-6.9575610, -71.2495006.webp"),
		createImagePath("Letters", "S_63.0554759, 112.3564609.webp"),
	],
	T: [
		createImagePath("Letters", "T_7.3300129, 134.4911511.webp"),
		createImagePath("Letters", "T_18.3680751, -64.5248566.webp"),
		createImagePath("Letters", "T_50.3345072, -89.7731274.webp"),
		createImagePath("Letters", "T_51.4996849, -58.2432850.webp"),
	],
	U: [
		createImagePath("Letters", "U_-20.4094934, 34.6506610.webp"),
		createImagePath("Letters", "U_0.5964991, 127.4708274.webp"),
		createImagePath("Letters", "U_66.7612188, 77.6202811.webp"),
	],
	V: [
		createImagePath("Letters", "V_-11.3863809, -53.1170106.webp"),
		createImagePath("Letters", "V_32.600781, 56.584671.webp"),
		createImagePath("Letters", "V_55.8922052, -115.7817679.webp"),
	],
	W: [
		createImagePath("Letters", "W_-17.859961, 125.264890.webp"),
		createImagePath("Letters", "W_21.1299614, -73.5297769.webp"),
		createImagePath("Letters", "W_56.0943874, -115.7551848.webp"),
	],
	X: [
		createImagePath("Letters", "X_-15.8894840, 125.6064293.webp"),
		createImagePath("Letters", "X_-16.5085232, 124.9428548.webp"),
		createImagePath("Letters", "X_-23.9806327, 14.5309649.webp"),
	],
	Y: [
		createImagePath("Letters", "Y_-0.8541393, -50.9045274.webp"),
		createImagePath("Letters", "Y_-15.892431, 125.592784.webp"),
		createImagePath("Letters", "Y_-22.6681130, 122.4295525.webp"),
	],
	Z: [
		createImagePath("Letters", "Z_32.5769955, 56.5787235.webp"),
		createImagePath("Letters", "Z_66.7623736, -84.6549331.webp"),
	],
	0: [
		createImagePath("Numbers", "0_2.7268560, 72.9590745.webp"),
		createImagePath("Numbers", "0_3.9541283, 126.7090713.webp"),
	],
	1: [
		createImagePath("Numbers", "1_32.1622980, 56.6540614.webp"),
		createImagePath("Numbers", "1_60.3663771, -1.1951833.webp"),
	],
	2: [
		createImagePath("Numbers", "2_32.1518027, 56.6111655.webp"),
		createImagePath("Numbers", "2_59.0077367, -111.5841037.webp"),
	],
	3: [
		createImagePath("Numbers", "3_44.7583481, -119.8783178.webp"),
		createImagePath("Numbers", "3_65.1871059, -112.6337704.webp"),
	],
	4: [
		createImagePath("Numbers", "4_-47.3943686, -72.4484623.webp"),
		createImagePath("Numbers", "4_50.2961905, -89.6248730.webp"),
	],
	5: [
		createImagePath("Numbers", "5_28.9338383, 33.5005894.webp"),
		createImagePath("Numbers", "5_41.4064945, -107.4118736.webp"),
	],
	6: [
		createImagePath("Numbers", "6_-23.1019969, -68.3604047.webp"),
		createImagePath("Numbers", "6_69.7274393, 69.1199037.webp"),
	],
	7: [
		createImagePath("Numbers", "7_2.0350947, 128.2195701.webp"),
		createImagePath("Numbers", "7_55.9708973, -79.8778501.webp"),
	],
	8: [
		createImagePath("Numbers", "8_-1.634558, 123.167095.webp"),
		createImagePath("Numbers", "8_-18.4193588, 35.5663574.webp"),
	],
	9: [
		createImagePath("Numbers", "9_-23.1019969, -68.3604047.webp"),
		createImagePath("Numbers", "9_69.7274393, 69.1199037.webp"),
	],
	_: [createImagePath("Symbols", "__23.7953479, -76.1355714.webp")],
	"-": [createImagePath("Symbols", "-_-24.9348044, 15.5824006.webp")],
	",": [
		createImagePath("Symbols", ",_-7.0747433, 114.5775325.webp"),
		createImagePath("Symbols", ",_5.9530164, 73.1324277.webp"),
		createImagePath("Symbols", ",_18.3294235, -64.8071554.webp"),
	],
	"!": [
		createImagePath("Symbols", "!_-0.0391871, 127.4402888.webp"),
		createImagePath("Symbols", "!_54.5927044, -118.0474962.webp"),
	],
	".": [
		createImagePath("Symbols", "dot_6.284543, 73.150693.webp"),
		createImagePath("Symbols", "dot_21.7228080, -71.8103726.webp"),
		createImagePath("Symbols", "dot_51.3977498, 99.6215323.webp"),
	],
	"(": [
		createImagePath("Symbols", "-36.4526133, -70.9535168.webp"),
		createImagePath("Symbols", "7.3093349, 134.4093933.webp"),
	],
	")": [
		createImagePath("Symbols", "right_7.3093349, 134.4093933.webp"),
		createImagePath("Symbols", "right_68.7477554, 96.8979194.webp"),
	],
	"'": [
		createImagePath("Symbols", "'_-7.0747433, 114.5775325.webp"),
		createImagePath("Symbols", "'_18.3294235, -64.8071554.webp"),
	],
	":": [
		createImagePath("Symbols", "colon_23.6005127, -76.0522627.webp"),
		createImagePath("Symbols", "colon_43.9588986, 15.1769833.webp"),
	],
	"/": [
		createImagePath("Symbols", "Dash_23.7953479, -76.1355714.webp"),
		createImagePath("Symbols", "Dash_23.8836197, -76.2686472.webp"),
	],
	"<": [
		createImagePath("Symbols", "Less_-11.3863809, -53.1170106.webp"),
		createImagePath("Symbols", "less_55.8922052, -115.7817679.webp"),
	],
	">": [
		createImagePath("Symbols", "More_-11.3863809, -53.1170106.webp"),
		createImagePath("Symbols", "More_55.8922052, -115.7817679.webp"),
	],
	"?": [createImagePath("Symbols", "Question_-0.0391871, 127.4402888.webp")],
	'"': [
		createImagePath("Symbols", "Quotation_51.2047505, -58.3081988.webp"),
		createImagePath("Symbols", "Quotation_59.9988973, 67.3862190.webp"),
	],
	";": [
		createImagePath("Symbols", "semicolon_53.3458005, -57.2944106.webp"),
		createImagePath("Symbols", "semicolon_69.8290673, 18.8311602.webp"),
	],
	"<3": createImagePath("Symbols", "Heart_21.8878476, -71.9975137.webp"),
};

const MemoizedLetterImage = React.memo(({ src, alt }) => (
	<LetterImage src={src} alt={alt} loading="lazy" />
));

const MemoizedLetterBox = React.memo(({ letterObj }) => (
	<LetterBox>
		{letterObj.imageSrc && (
			<MemoizedLetterImage
				src={letterObj.imageSrc}
				alt={`Character ${letterObj.char}`}
			/>
		)}
	</LetterBox>
));

const MemoizedSpaceBox = React.memo(({ id }) => (
	<SpaceBox style={{ width: "1.8rem" }} />
));

const MemoizedLettersRow = React.memo(({ line, lineIndex }) => (
	<LettersRow>
		<LettersDisplay id={lineIndex === 0 ? "box" : undefined}>
			{line.map((letterObj) =>
				letterObj.char !== " " ? (
					<MemoizedLetterBox key={letterObj.id} letterObj={letterObj} />
				) : (
					<MemoizedSpaceBox key={letterObj.id} id={letterObj.id} />
				)
			)}
		</LettersDisplay>
	</LettersRow>
));

const Letters = ({ onLetterCountChange }) => {
	const [lines, setLines] = useState([[], [], [], []]);
	const [currentLine, setCurrentLine] = useState(0);
	const [maxRowLetters, setMaxRowLetters] = useState(0);
	const [enterEnabled, setEnterEnabled] = useState(true);
	const inputRef = useRef(null);
	const [lastChar, setLastChar] = useState(null);
	const nextIdRef = useRef(1);

	const heartImageUrl = useMemo(() => letterImages["<3"], []);

	const totalLetterCount = useMemo(() => {
		return lines.reduce((total, line) => {
			return total + line.filter((charObj) => charObj.char !== " ").length;
		}, 0);
	}, [lines]);

	useEffect(() => {
		if (totalLetterCount === 0) {
			setCurrentLine(0);
		}
	}, [totalLetterCount]);

	useEffect(() => {
		if (onLetterCountChange) {
			onLetterCountChange(totalLetterCount);
		}
	}, [totalLetterCount, onLetterCountChange]);

	const checkForHeartEmoji = useCallback(
		(char) => {
			if (lastChar === "<" && char === "3") {
				setLines((prev) => {
					const newLines = [...prev];
					const lineContent = prev[currentLine];

					if (lineContent.length > 0) {
						// Remove the last character ('<') and add heart
						const updatedLine = lineContent.slice(0, -1);
						const heartEmoji = {
							char: "<3",
							id: nextIdRef.current++,
							imageSrc: heartImageUrl,
						};
						newLines[currentLine] = [...updatedLine, heartEmoji];
					}

					return newLines;
				});

				setLastChar(null);
				return true;
			}

			setLastChar(char);
			return false;
		},
		[lastChar, currentLine, heartImageUrl]
	);

	useEffect(() => {
		let timeoutId;
		const handleResize = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				const boxElement = document.querySelector("#box");
				if (boxElement) {
					const boxSize = boxElement.offsetHeight + 16;
					const maxBoxes = Math.floor(window.innerWidth / boxSize);
					setMaxRowLetters(maxBoxes);

					document.documentElement.style.setProperty(
						"--windowHeight",
						`${window.innerHeight}px`
					);
					document.documentElement.style.setProperty(
						"--windowWidth",
						`${window.innerWidth}px`
					);
				}
			}, 100);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			clearTimeout(timeoutId);
		};
	}, []);

	useEffect(() => {
		if (
			maxRowLetters > 0 &&
			lines[currentLine]?.length >= maxRowLetters &&
			currentLine < 3
		) {
			setCurrentLine((prevLine) => prevLine + 1);
		}
	}, [lines, currentLine, maxRowLetters]);

	const assignRandomImage = useCallback((char) => {
		if (!letterImages[char] || letterImages[char].length === 0) {
			return { char, id: nextIdRef.current++, imageSrc: null };
		}
		const randomIndex = Math.floor(Math.random() * letterImages[char].length);
		return {
			char,
			id: nextIdRef.current++,
			imageSrc: letterImages[char][randomIndex],
		};
	}, []);

	const handleEnterKey = useCallback(() => {
		if (currentLine < 3) {
			setCurrentLine((prev) => prev + 1);
			setEnterEnabled(false);
			setTimeout(() => setEnterEnabled(true), 1000);
		} else {
			inputRef.current?.focus();
			moveCursorToEnd();
		}
	}, [currentLine]);

	const moveCursorToEnd = useCallback(() => {
		if (inputRef.current) {
			const input = inputRef.current;
			const length = input.value.length;
			input.setSelectionRange(length, length);
		}
		setCurrentLine((prev) => Math.min(prev, lines.length - 1));
	}, [lines.length]);

	const addCharacter = useCallback(
		(char) => {
			if (currentLine >= 3 && lines[3].length >= maxRowLetters) {
				return false;
			}

			if (char !== " " && totalLetterCount >= maxRowLetters * 4) {
				return false;
			}

			if (checkForHeartEmoji(char)) {
				return true;
			}

			const processedChar = char.match(/[a-zA-Z]/) ? char.toUpperCase() : char;

			if (char !== " " && char !== "<" && !letterImages[processedChar]) {
				return false;
			}

			setLines((prev) => {
				const newLines = [...prev];
				const currentLineContent = prev[currentLine];

				if (char === " ") {
					if (
						currentLineContent.length > 0 &&
						currentLineContent[currentLineContent.length - 1].char !== " "
					) {
						newLines[currentLine] = [
							...newLines[currentLine],
							{ char: " ", id: nextIdRef.current++, imageSrc: null },
						];
					}
				} else {
					// Handle regular character
					const charWithImage = assignRandomImage(processedChar);
					newLines[currentLine] = [...newLines[currentLine], charWithImage];
				}

				return newLines;
			});

			return true;
		},
		[
			currentLine,
			lines,
			maxRowLetters,
			totalLetterCount,
			checkForHeartEmoji,
			assignRandomImage,
		]
	);

	const deleteLastCharacter = useCallback(() => {
		setLines((prev) => {
			const newLines = [...prev];

			let lastNonEmptyLineIndex = -1;
			for (let i = newLines.length - 1; i >= 0; i--) {
				if (newLines[i].length > 0) {
					lastNonEmptyLineIndex = i;
					break;
				}
			}

			if (lastNonEmptyLineIndex !== -1) {
				newLines[lastNonEmptyLineIndex] = newLines[lastNonEmptyLineIndex].slice(
					0,
					-1
				);
				setCurrentLine(lastNonEmptyLineIndex);
			}

			return newLines;
		});

		setLastChar(null);
	}, []);

	const handleInputChange = useCallback(
		(e) => {
			const value = e.target.value;

			if (value) {
				const lastChar = value.slice(-1);
				addCharacter(lastChar);
			}

			e.target.value = "";
			moveCursorToEnd();
		},
		[addCharacter, moveCursorToEnd]
	);

	const handleInputKeyDown = useCallback(
		(e) => {
			if (e.key === "Backspace" && e.target.value === "") {
				e.preventDefault();

				if (currentLine > 0) {
					setCurrentLine(currentLine - 1);
				}
			}
			moveCursorToEnd();
		},
		[currentLine, moveCursorToEnd]
	);

	const handleContainerClick = useCallback(() => {
		if (inputRef.current) {
			inputRef.current.focus();
			moveCursorToEnd();
		}
	}, [moveCursorToEnd]);

	const handleKeyDown = useCallback(
		(e) => {
			if (e.key === "Control" || e.ctrlKey) {
				return;
			}

			if (e.key === "Enter") {
				e.preventDefault();
				if (enterEnabled) {
					handleEnterKey();
				}
			} else if (e.key === "Backspace") {
				e.preventDefault();
				deleteLastCharacter();
			} else if (e.key.length === 1) {
				e.preventDefault();
				addCharacter(e.key);
			}
		},
		[enterEnabled, handleEnterKey, deleteLastCharacter, addCharacter]
	);

	// Set up keyboard event listener
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

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
				onKeyDown={handleInputKeyDown}
				autoCapitalize="characters"
				autoComplete="off"
				autoCorrect="off"
			/>
			<DisplayContainer>
				{lines.map((line, lineIndex) => (
					<MemoizedLettersRow
						key={lineIndex}
						line={line}
						lineIndex={lineIndex}
					/>
				))}
			</DisplayContainer>
		</Container>
	);
};

export default Letters;

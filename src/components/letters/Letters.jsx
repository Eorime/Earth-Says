import React, { useState, useEffect, useRef, useCallback } from "react";
import {
	Container,
	DisplayContainer,
	LetterBox,
	LetterImage,
	LettersDisplay,
	LettersRow,
	SpaceBox,
} from "./style";

//letter imports
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
import L1 from "../../assets/Letters/L_-8.3314600, 15.0973210.jpg";
import L2 from "../../assets/Letters/L_-15.6106414, 136.3288146.jpg";
import L3 from "../../assets/Letters/L_61.0473425, -101.3786237.jpg";
import M1 from "../../assets/Letters/M_-17.859961, 125.264890.jpg";
import M2 from "../../assets/Letters/M_12.0851075, -84.2286402.jpg";
import M3 from "../../assets/Letters/M_56.0943874, -115.7551848.jpg";
import M4 from "../../assets/Letters/M_64.2582744, 116.5564096.jpg";
import N1 from "../../assets/Letters/N_-17.8598312, 125.2576030.jpg";
import N2 from "../../assets/Letters/N_32.5769955, 56.5787235.jpg";
import N3 from "../../assets/Letters/N_66.7623736, -84.6549331.jpg";
import O1 from "../../assets/Letters/O_-8.3260424, 15.0649766.jpg";
import O2 from "../../assets/Letters/O_3.1646228, 72.8981555.jpg";
import O3 from "../../assets/Letters/O_3.4006072, 73.6082539.jpg";
import P1 from "../../assets/Letters/P_-4.1617897, 121.5130135.jpg";
import P2 from "../../assets/Letters/P_50.6516071, -91.2194814.jpg";
import P3 from "../../assets/Letters/P_69.812115, 18.861134.jpg";
import Q1 from "../../assets/Letters/Q_0.7922795, 128.4271378.jpg";
import Q2 from "../../assets/Letters/Q_69.309231, 70.722114.jpg";
import R1 from "../../assets/Letters/R_38.4396484, -109.7301069.jpg";
import R2 from "../../assets/Letters/R_38.5944012, -110.0468744.jpg";
import R3 from "../../assets/Letters/R_51.1392961, 99.4220075.jpg";
import S1 from "../../assets/Letters/S_-4.5016261, -71.3982632.jpg";
import S2 from "../../assets/Letters/S_-6.9575610, -71.2495006.jpg";
import S3 from "../../assets/Letters/S_-7.0519509, -71.5968845.jpg";
import S4 from "../../assets/Letters/S_-24.1658572, 132.8858198.jpg";
import S5 from "../../assets/Letters/S_18.8632011, 9.5828455.jpg";
import S6 from "../../assets/Letters/S_63.0554759, 112.3564609.jpg";
import T1 from "../../assets/Letters/T_7.3300129, 134.4911511.jpg";
import T2 from "../../assets/Letters/T_18.3680751, -64.5248566.jpg";
import T3 from "../../assets/Letters/T_50.3345072, -89.7731274.jpg";
import T4 from "../../assets/Letters/T_51.4996849, -58.2432850.jpg";
import U1 from "../../assets/Letters/U_-20.4094934, 34.6506610.jpg";
import U2 from "../../assets/Letters/U_0.5964991, 127.4708274.jpg";
import U3 from "../../assets/Letters/U_66.7612188, 77.6202811.jpg";
import V1 from "../../assets/Letters/V_-11.3863809, -53.1170106.jpg";
import V2 from "../../assets/Letters/V_32.600781, 56.584671.jpg";
import V3 from "../../assets/Letters/V_55.8922052, -115.7817679.jpg";
import W1 from "../../assets/Letters/W_-17.859961, 125.264890.jpg";
import W2 from "../../assets/Letters/W_21.1299614, -73.5297769.jpg";
import W3 from "../../assets/Letters/W_56.0943874, -115.7551848.jpg";
import X1 from "../../assets/Letters/X_-15.8894840, 125.6064293.jpg";
import X2 from "../../assets/Letters/X_-16.5085232, 124.9428548.jpg";
import X3 from "../../assets/Letters/X_-23.9806327, 14.5309649.jpg";
import Y1 from "../../assets/Letters/Y_-0.8541393, -50.9045274.jpg";
import Y2 from "../../assets/Letters/Y_-22.6681130, 122.4295525.jpg";
import Y3 from "../../assets/Letters/Y_-22.6681130, 122.4295525.jpg";
import Z1 from "../../assets/Letters/Z_32.5769955, 56.5787235.jpg";
import Z2 from "../../assets/Letters/Z_41.4084081, -107.3620640.jpg";
import Z3 from "../../assets/Letters/Z_66.7623736, -84.6549331.jpg";

//number imports
import Zero1 from "../../assets/Numbers/0_2.7268560, 72.9590745.jpg";
import Zero2 from "../../assets/Numbers/0_3.9541283, 126.7090713.jpg";
import One1 from "../../assets/Numbers/1_32.1622980, 56.6540614.jpg";
import One2 from "../../assets/Numbers/1_60.3663771, -1.1951833.jpg";
import Two1 from "../../assets/Numbers/2_32.1518027, 56.6111655.jpg";
import Two2 from "../../assets/Numbers/2_59.0077367, -111.5841037.jpg";
import Three1 from "../../assets/Numbers/3_44.7583481, -119.8783178.jpg";
import Three2 from "../../assets/Numbers/3_65.1871059, -112.6337704.jpg";
import Four1 from "../../assets/Numbers/4_-47.3943686, -72.4484623.jpg";
import Four2 from "../../assets/Numbers/4_50.2961905, -89.6248730.jpg";
import Five1 from "../../assets/Numbers/5_28.9338383, 33.5005894.jpg";
import Five2 from "../../assets/Numbers/5_41.4064945, -107.4118736.jpg";
import Six1 from "../../assets/Numbers/6_-23.1019969, -68.3604047.jpg";
import Six2 from "../../assets/Numbers/6_69.7274393, 69.1199037.jpg";
import Seven1 from "../../assets/Numbers/7_2.0350947, 128.2195701.jpg";
import Seven2 from "../../assets/Numbers/7_55.9708973, -79.8778501.jpg";
import Seven3 from "../../assets/Numbers/7_62.2364319, -67.1955357.jpg";
import Eight1 from "../../assets/Numbers/8_-1.634558, 123.167095.jpg";
import Eight2 from "../../assets/Numbers/8_-18.4193588, 35.5663574.jpg";
import Eight3 from "../../assets/Numbers/8_69.3419162, 70.6078746.jpg";
import Nine1 from "../../assets/Numbers/9_-23.1019969, -68.3604047.jpg";
import Nine2 from "../../assets/Numbers/9_69.7274393, 69.1199037.jpg";

//symbol imports
import Underscore from "../../assets/Symbols/__23.7953479, -76.1355714.jpg";
import Hyphen from "../../assets/Symbols/-_-24.9348044, 15.5824006.jpg";
import Comma1 from "../../assets/Symbols/,_-7.0747433, 114.5775325.jpg";
import Comma2 from "../../assets/Symbols/,_5.9530164, 73.1324277.jpg";
import Comma3 from "../../assets/Symbols/,_18.3294235, -64.8071554.jpg";
import Exclamation1 from "../../assets/Symbols/!_-0.0391871, 127.4402888.jpg";
import Exclamation2 from "../../assets/Symbols/!_54.5927044, -118.0474962.jpg";
import Period1 from "../../assets/Symbols/._6.284543, 73.150693.jpg";
import Period2 from "../../assets/Symbols/._21.7228080, -71.8103726.jpg";
import Period3 from "../../assets/Symbols/._51.3977498, 99.6215323.jpg";
import ParenthesesLeft1 from "../../assets/Symbols/-36.4526133, -70.9535168.jpg";
import ParenthesesLeft2 from "../../assets/Symbols/7.3093349, 134.4093933.jpg";
import ParenthesesLeft3 from "../../assets/Symbols/68.7477554, 96.8979194.jpg";
import ParenthesesRight1 from "../../assets/Symbols/right_-36.4526133, -70.9535168.jpg";
import ParenthesesRight2 from "../../assets/Symbols/right_7.3093349, 134.4093933.jpg";
import ParenthesesRight3 from "../../assets/Symbols/right_68.7477554, 96.8979194.jpg";
import Apostrophe1 from "../../assets/Symbols/'_-7.0747433, 114.5775325.jpg";
import Apostrophe2 from "../../assets/Symbols/'_5.9530164, 73.1324277.jpg";
import Apostrophe3 from "../../assets/Symbols/'_18.3294235, -64.8071554.jpg";
import Colon1 from "../../assets/Symbols/colon_23.6005127, -76.0522627.jpg";
import Colon2 from "../../assets/Symbols/colon_43.9588986, 15.1769833.jpg";
import Dash1 from "../../assets/Symbols/Dash_23.7953479, -76.1355714.jpg";
import Dash2 from "../../assets/Symbols/Dash_23.8836197, -76.2686472.jpg";
import Less1 from "../../assets/Symbols/Less_-11.3863809, -53.1170106.jpg";
import Less2 from "../../assets/Symbols/less_55.8922052, -115.7817679.jpg";
import More1 from "../../assets/Symbols/More_-11.3863809, -53.1170106.jpg";
import More2 from "../../assets/Symbols/More_55.8922052, -115.7817679.jpg";
import Question from "../../assets/Symbols/Question_-0.0391871, 127.4402888.jpg";
import Quotation1 from "../../assets/Symbols/Quotation_51.2047505, -58.3081988.jpg";
import Quotation2 from "../../assets/Symbols/Quotation_59.9988973, 67.3862190.jpg";
import Semicolon1 from "../../assets/Symbols/semicolon_53.3458005, -57.2944106.jpg";
import Semicolon2 from "../../assets/Symbols/semicolon_69.8290673, 18.8311602.jpg";

// arrays of images for each letter
export const letterImages = {
	A: [A1, A2, A3],
	B: [B1, B2],
	C: [C1, C2, C3],
	D: [D1, D2, D3],
	E: [E1, E2, E3],
	F: [F1],
	G: [G1, G2],
	H: [H1, H2, H3, H4],
	I: [I1, I2, I3],
	J: [J1, J2],
	K: [K1, K2, K3],
	L: [L1, L2, L3],
	M: [M1, M2, M3, M4],
	N: [N1, N2, N3],
	O: [O1, O2, O3],
	P: [P1, P2, P3],
	Q: [Q1, Q2],
	R: [R1, R2, R3],
	S: [S1, S2, S3, S4, S5, S6],
	T: [T1, T2, T3, T4],
	U: [U1, U2, U3],
	V: [V1, V2, V3],
	W: [W1, W2, W3],
	X: [X1, X2, X3],
	Y: [Y1, Y2, Y3],
	Z: [Z1, Z2, Z3],
	0: [Zero1, Zero2],
	1: [One1, One2],
	2: [Two1, Two2],
	3: [Three1, Three2],
	4: [Four1, Four2],
	5: [Five1, Five2],
	6: [Six1, Six2],
	7: [Seven1, Seven2, Seven3],
	8: [Eight1, Eight2, Eight3],
	9: [Nine1, Nine2],
	_: [Underscore],
	"-": [Hyphen],
	",": [Comma1, Comma2, Comma3],
	"!": [Exclamation1, Exclamation2],
	".": [Period1, Period2, Period3],
	"(": [ParenthesesLeft1, ParenthesesLeft2, ParenthesesLeft3],
	")": [ParenthesesRight1, ParenthesesRight2, ParenthesesRight3],
	"'": [Apostrophe1, Apostrophe2, Apostrophe3],
	":": [Colon1, Colon2],
	"/": [Dash1, Dash2],
	"<": [Less1, Less2],
	">": [More1, More2],
	"?": [Question],
	'"': [Quotation1, Quotation2],
	";": [Semicolon1, Semicolon2],
};

const Letters = ({ onLetterCountChange }) => {
	const [lines, setLines] = useState([[], [], [], []]);
	const [currentLine, setCurrentLine] = useState(0);
	const [totalLetterCount, setTotalLetterCount] = useState(0);
	const [maxLetters, setMaxLetters] = useState(60);
	const [maxRowLetters, setMaxRowLetters] = useState(0);
	const [enterEnabled, setEnterEnabled] = useState(true);
	const inputRef = useRef(null);

	// calculate max letters per row based on window size
	useEffect(() => {
		const handleResize = () => {
			const boxSize = document.querySelector("#box").offsetHeight + 16;
			const maxBoxes = Math.floor(window.innerWidth / boxSize);
			setMaxRowLetters(maxBoxes);

			if (window.innerWidth < 800) {
				setMaxLetters(24);
			} else {
				setMaxLetters(60);
			}

			// set CSS variables for responsive design
			document.documentElement.style.setProperty(
				"--windowHeight",
				`${window.innerHeight}px`
			);
			document.documentElement.style.setProperty(
				"--windowWidth",
				`${window.innerWidth}px`
			);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// update letter count and notify parent component
	useEffect(() => {
		const count = lines.reduce((total, line) => {
			return total + line.filter((charObj) => charObj.char !== " ").length;
		}, 0);

		setTotalLetterCount(count);
		if (onLetterCountChange) {
			onLetterCountChange(count);
		}
	}, [lines, onLetterCountChange]);

	// check if current line is full and move to next if needed
	const checkAndMoveToNextLine = useCallback(() => {
		if (lines[currentLine]?.length === maxRowLetters && currentLine < 3) {
			setCurrentLine((prev) => prev + 1);
			return true;
		}
		return false;
	}, [currentLine, lines, maxRowLetters]);

	// assign a random image to a character
	const assignRandomImage = (char) => {
		if (!letterImages[char] || letterImages[char].length === 0) {
			return { char, id: Date.now(), imageSrc: null };
		}
		const randomIndex = Math.floor(Math.random() * letterImages[char].length);
		return {
			char,
			id: Date.now(),
			imageSrc: letterImages[char][randomIndex],
		};
	};

	// handle Enter key presses
	const handleEnterKey = () => {
		if (currentLine < 3 && lines[currentLine - 1]?.length !== 0) {
			setCurrentLine((prev) => prev + 1);
			setEnterEnabled(false);
			setTimeout(() => setEnterEnabled(true), 1000);
		} else {
			inputRef.current?.focus();
			moveCursorToEnd();
		}
	};

	// move cursor to the end of input field
	const moveCursorToEnd = () => {
		if (inputRef.current) {
			const input = inputRef.current;
			const length = input.value.length;
			input.setSelectionRange(length, length);
		}
		setCurrentLine((prev) => Math.min(prev, lines.length - 1));
	};

	// add a character to the current line
	const addCharacter = (char) => {
		// don't allow typing if we've reached the limits
		if (currentLine >= 3 && lines[3].length >= maxRowLetters) {
			return false;
		}

		// check total letter limit
		if (char !== " " && totalLetterCount >= maxLetters) {
			return false;
		}

		// process the character
		const processedChar = char.match(/[a-zA-Z]/) ? char.toUpperCase() : char;

		// ignore if character isn't in our map
		if (char !== " " && !letterImages[processedChar]) {
			return false;
		}

		// handle space character
		if (char === " ") {
			setLines((prev) => {
				const newLines = [...prev];
				const currentLineContent = prev[currentLine];

				// only add space if the line isn't empty and doesn't end with space
				if (
					currentLineContent.length > 0 &&
					currentLineContent[currentLineContent.length - 1].char !== " "
				) {
					newLines[currentLine] = [
						...newLines[currentLine],
						{ char: " ", id: Date.now(), imageSrc: null },
					];
				}
				return newLines;
			});
		} else {
			// handle regular character
			setLines((prev) => {
				const newLines = [...prev];
				const charWithImage = assignRandomImage(processedChar);
				newLines[currentLine] = [...newLines[currentLine], charWithImage];
				return newLines;
			});
		}

		// check if we need to move to next line
		setTimeout(() => checkAndMoveToNextLine(), 0);
		return true;
	};

	// delete the last character
	const deleteLastCharacter = () => {
		setLines((prev) => {
			const newLines = [...prev];

			// find the last line that has at least one character
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
	};

	// handle input changes (for mobile devices)
	const handleInputChange = (e) => {
		const value = e.target.value;

		if (value) {
			const lastChar = value.slice(-1);
			addCharacter(lastChar);
		}

		// clear the input field
		e.target.value = "";
		moveCursorToEnd();
	};

	// handle specific key events for the input field
	const handleInputKeyDown = (e) => {
		if (e.key === "Backspace" && e.target.value === "") {
			e.preventDefault();

			// only move to previous line if current line is empty
			if (currentLine > 0) {
				setCurrentLine(currentLine - 1);
			}
		}
		moveCursorToEnd();
	};

	// handle clicks on the container
	const handleContainerClick = () => {
		if (inputRef.current) {
			inputRef.current.focus();
			moveCursorToEnd();
		}
	};

	// handle keyboard events globally
	useEffect(() => {
		const handleKeyDown = (e) => {
			// ignore control key and control combinations
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
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		currentLine,
		totalLetterCount,
		enterEnabled,
		maxRowLetters,
		lines,
		checkAndMoveToNextLine,
		maxLetters,
	]);

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
					<LettersRow key={lineIndex}>
						<LettersDisplay id="box">
							{line.map((letterObj) =>
								letterObj.char !== " " ? (
									<LetterBox key={letterObj.id}>
										{letterObj.imageSrc && (
											<LetterImage
												src={letterObj.imageSrc}
												alt={`Character ${letterObj.char}`}
											/>
										)}
									</LetterBox>
								) : (
									<SpaceBox key={letterObj.id} style={{ width: "1rem" }} />
								)
							)}
						</LettersDisplay>
					</LettersRow>
				))}
			</DisplayContainer>
		</Container>
	);
};

export default Letters;

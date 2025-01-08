import React from "react";
import {
	Container,
	DisplayContainer,
	LetterBox,
	LetterImage,
	LettersDisplay,
	LettersRow,
	Spacer,
} from "./style";
import { useState, useEffect } from "react";

const Letters = () => {
	const [word, setWord] = useState("");

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

	const symbolImage = {};

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

			// handle backspace
			if (e.key === "Backspace") {
				e.preventDefault();
				setWord((prev) => prev.slice(0, -1));
			}
			// handle letters
			else if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
				e.preventDefault();
				setWord((prev) => prev + e.key.toUpperCase());
			}
			// handle space
			else if (e.key === " ") {
				e.preventDefault();
				setWord((prev) => prev + " ");
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<Container>
			<DisplayContainer>
				<LettersRow>
					<Spacer
						style={{
							width:
								word.length === 0
									? "50%"
									: Math.max(0, 50 - word.length * 2.5) + "%",
						}}
					/>

					<LettersDisplay>
						{word.split("").map((letter, index) => (
							<LetterBox key={index}>
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
			</DisplayContainer>
		</Container>
	);
};

export default Letters;

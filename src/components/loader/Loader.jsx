import React, { useState, useEffect } from "react";
import {
	Container,
	LoaderContainer,
	LoaderLetterBox,
	LoaderLetterImg,
} from "./style";
import { letterImages } from "../letters/Letters";

// Arrays of image sequences
const EArr = [
	letterImages.A[0],
	letterImages.B[1],
	letterImages.C[2],
	letterImages.H[3],
	letterImages.S[4],
	letterImages.P[1],
	letterImages.T[2],
	letterImages.M[0],
	letterImages.G[1],
	letterImages.K[2],
	letterImages.O[1],
	letterImages.D[0],
	letterImages.E[1],
];
const AArr = [
	letterImages.W[2],
	letterImages.Q[1],
	letterImages.I[2],
	letterImages.N[1],
	letterImages.L[2],
	letterImages.F[0],
	letterImages.V[1],
	letterImages.S[0],
	letterImages.A[2],
	letterImages.O[0],
	letterImages.R[1],
	letterImages.J[0],
	letterImages.M[3],
	letterImages.P[2],
	letterImages.S[0],
	letterImages.A[0],
];
const RArr = [
	letterImages.U[1],
	letterImages.D[2],
	letterImages.T[0],
	letterImages.H[0],
	letterImages.C[1],
	letterImages.B[0],
	letterImages.K[0],
	letterImages.W[1],
	letterImages.N[2],
	letterImages.G[0],
	letterImages.S[3],
	letterImages.I[0],
	letterImages.M[1],
	letterImages.V[0],
	letterImages.R[2],
	letterImages.L[0],
	letterImages.B[0],
	letterImages.T[0],
	letterImages.R[1],
];
const TArr = [
	letterImages.A[1],
	letterImages.E[0],
	letterImages.S[5],
	letterImages.J[1],
	letterImages.T[1],
	letterImages.O[2],
	letterImages.U[0],
	letterImages.I[1],
	letterImages.C[0],
	letterImages.Q[0],
	letterImages.D[1],
	letterImages.H[2],
	letterImages.M[2],
	letterImages.N[0],
	letterImages.R[0],
	letterImages.K[1],
	letterImages.L[1],
	letterImages.V[2],
	letterImages.Q[0],
	letterImages.W[1],
	letterImages.N[2],
	letterImages.T[3],
];
const HArr = [
	letterImages.W[0],
	letterImages.S[1],
	letterImages.B[1],
	letterImages.P[1],
	letterImages.U[2],
	letterImages.G[1],
	letterImages.A[0],
	letterImages.T[3],
	letterImages.O[1],
	letterImages.E[2],
	letterImages.C[1],
	letterImages.N[1],
	letterImages.D[0],
	letterImages.H[1],
	letterImages.I[0],
	letterImages.K[0],
	letterImages.S[2],
	letterImages.L[2],
	letterImages.J[0],
	letterImages.M[0],
	letterImages.N[0],
	letterImages.R[0],
	letterImages.K[1],
	letterImages.E[2],
	letterImages.H[1],
];
const SArr = [
	letterImages.T[3],
	letterImages.C[0],
	letterImages.L[2],
	letterImages.S[2],
	letterImages.O[1],
	letterImages.K[1],
	letterImages.V[2],
	letterImages.M[2],
	letterImages.S[0],
	letterImages.E[0],
	letterImages.J[1],
	letterImages.R[0],
	letterImages.I[1],
	letterImages.T[1],
	letterImages.S[5],
	letterImages.N[0],
	letterImages.Q[0],
	letterImages.U[0],
	letterImages.H[2],
	letterImages.L[1],
	letterImages.E[2],
	letterImages.D[1],
	letterImages.O[2],
	letterImages.K[0],
	letterImages.C[1],
	letterImages.A[1],
	letterImages.E[2],
	letterImages.S[0],
];
const A2Arr = [
	letterImages.O[1],
	letterImages.C[0],
	letterImages.L[2],
	letterImages.K[1],
	letterImages.S[2],
	letterImages.T[3],
	letterImages.E[0],
	letterImages.J[1],
	letterImages.Q[0],
	letterImages.S[0],
	letterImages.L[1],
	letterImages.T[1],
	letterImages.N[0],
	letterImages.V[2],
	letterImages.C[1],
	letterImages.S[0],
	letterImages.H[2],
	letterImages.A[1],
	letterImages.E[2],
	letterImages.U[0],
	letterImages.M[2],
	letterImages.K[0],
	letterImages.D[1],
	letterImages.O[2],
	letterImages.S[5],
	letterImages.R[0],
	letterImages.I[1],
	letterImages.S[2],
	letterImages.J[0],
	letterImages.A[1],
];
const YArr = [
	letterImages.S[0],
	letterImages.V[2],
	letterImages.L[2],
	letterImages.I[1],
	letterImages.Q[0],
	letterImages.K[1],
	letterImages.A[1],
	letterImages.W[0],
	letterImages.S[1],
	letterImages.B[1],
	letterImages.O[2],
	letterImages.M[2],
	letterImages.L[1],
	letterImages.J[1],
	letterImages.S[2],
	letterImages.E[2],
	letterImages.C[0],
	letterImages.S[0],
	letterImages.H[2],
	letterImages.K[0],
	letterImages.S[2],
	letterImages.E[0],
	letterImages.T[1],
	letterImages.J[0],
	letterImages.N[0],
	letterImages.U[0],
	letterImages.R[0],
	letterImages.C[1],
	letterImages.O[1],
	letterImages.D[1],
	letterImages.A[1],
	letterImages.L[2],
	letterImages.S[5],
	letterImages.Y[0],
];
const S2Arr = [
	letterImages.S[2],
	letterImages.K[1],
	letterImages.S[0],
	letterImages.L[2],
	letterImages.J[0],
	letterImages.O[2],
	letterImages.S[5],
	letterImages.V[2],
	letterImages.R[0],
	letterImages.T[1],
	letterImages.E[2],
	letterImages.D[1],
	letterImages.N[0],
	letterImages.L[1],
	letterImages.Q[0],
	letterImages.E[0],
	letterImages.U[0],
	letterImages.M[2],
	letterImages.K[0],
	letterImages.A[1],
	letterImages.S[0],
	letterImages.C[0],
	letterImages.L[2],
	letterImages.O[1],
	letterImages.S[2],
	letterImages.J[1],
	letterImages.I[1],
	letterImages.C[1],
	letterImages.T[3],
	letterImages.H[2],
	letterImages.N[0],
	letterImages.U[0],
	letterImages.R[0],
	letterImages.A[1],
	letterImages.T[3],
	letterImages.Y[1],
	letterImages.E[0],
	letterImages.S[1],
];

const Loader = ({ onComplete }) => {
	const [index, setIndex] = useState(0);
	const [done, setDone] = useState(false);
	const [removeIndex, setRemoveIndex] = useState(null);
	const [specialIndex, setSpecialIndex] = useState(0);

	const dotsArr = [
		letterImages["."][2],
		letterImages["."][1],
		letterImages["."][0],
	];

	const maxLength = Math.max(
		EArr.length,
		AArr.length,
		RArr.length,
		TArr.length,
		HArr.length,
		SArr.length,
		A2Arr.length,
		YArr.length,
		S2Arr.length
	);

	useEffect(() => {
		if (index >= maxLength || done) return;

		const interval = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 100);

		return () => clearInterval(interval);
	}, [index, done, maxLength]);

	useEffect(() => {
		if (index >= maxLength && !done) {
			const delayBeforeDots = setTimeout(() => {
				setDone(true);
				let i = 0;
				const specialTimer = setInterval(() => {
					if (i >= dotsArr.length) {
						clearInterval(specialTimer);
						setTimeout(() => setRemoveIndex(9 + dotsArr.length), 1000);
					} else {
						setSpecialIndex((prev) => prev + 1);
						i++;
					}
				}, 200);
			}, 600);
			return () => clearTimeout(delayBeforeDots);
		}
	}, [index, done]);

	useEffect(() => {
		if (removeIndex === null || removeIndex < 0) return;

		const cleanupTimer = setTimeout(() => {
			if (removeIndex === 0) {
				if (typeof onComplete === "function") {
					onComplete();
				}
			}
			setRemoveIndex((prev) => prev - 1);
		}, 50);

		return () => clearTimeout(cleanupTimer);
	}, [removeIndex, onComplete]);

	const getImage = (arr) =>
		index < arr.length ? arr[index] : arr[arr.length - 1];

	const images = [
		getImage(EArr),
		getImage(AArr),
		getImage(RArr),
		getImage(TArr),
		getImage(HArr),
		getImage(SArr),
		getImage(A2Arr),
		getImage(YArr),
		getImage(S2Arr),
		...dotsArr.slice(0, specialIndex),
	];

	const visibleImages =
		done && removeIndex !== null ? images.slice(0, removeIndex) : images;

	return (
		<Container>
			<LoaderContainer>
				<LoaderLetterBox>
					{visibleImages.slice(0, 5).map((img, i) => (
						<LoaderLetterImg key={`top-${i}`} src={img} />
					))}
				</LoaderLetterBox>
				<LoaderLetterBox>
					{visibleImages.slice(5).map((img, i) => (
						<LoaderLetterImg key={`bottom-${i}`} src={img} />
					))}
				</LoaderLetterBox>
			</LoaderContainer>
		</Container>
	);
};

export default Loader;

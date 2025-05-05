import React, { useState, useEffect } from "react";
import {
	Container,
	LoaderContainer,
	LoaderLetterBox,
	LoaderLetterImg,
} from "./style";
import { letterImages } from "../letters/Letters";

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
	letterImages.L[2],
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
	letterImages.T[3],
	letterImages.Y[1],
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

const Loader = () => {
	const [index, setIndex] = useState(0);
	const [done, setDone] = useState(false);

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
		if (index >= maxLength - 1) {
			setDone(true);
			return;
		}

		// continue animation if not done
		if (!done) {
			const timer = setTimeout(() => {
				setIndex(index + 1);
			}, 150);

			return () => clearTimeout(timer);
		}
	}, [index, done, maxLength]);

	const eImg = index < EArr.length ? EArr[index] : EArr[EArr.length - 1];
	const aImg = index < AArr.length ? AArr[index] : AArr[AArr.length - 1];
	const rImg = index < RArr.length ? RArr[index] : RArr[RArr.length - 1];
	const tImg = index < TArr.length ? TArr[index] : TArr[TArr.length - 1];
	const hImg = index < HArr.length ? HArr[index] : HArr[HArr.length - 1];
	const sImg = index < SArr.length ? SArr[index] : SArr[SArr.length - 1];
	const a2Img = index < A2Arr.length ? A2Arr[index] : A2Arr[A2Arr.length - 1];
	const yImg = index < YArr.length ? YArr[index] : YArr[YArr.length - 1];
	const s2Img = index < S2Arr.length ? S2Arr[index] : S2Arr[S2Arr.length - 1];

	return (
		<Container>
			<LoaderContainer>
				<LoaderLetterBox>
					<LoaderLetterImg src={eImg} />
					<LoaderLetterImg src={aImg} />
					<LoaderLetterImg src={rImg} />
					<LoaderLetterImg src={tImg} />
					<LoaderLetterImg src={hImg} />
				</LoaderLetterBox>
				<LoaderLetterBox>
					<LoaderLetterImg src={sImg} />
					<LoaderLetterImg src={a2Img} />
					<LoaderLetterImg src={yImg} />
					<LoaderLetterImg src={s2Img} />
				</LoaderLetterBox>
			</LoaderContainer>
		</Container>
	);
};

export default Loader;

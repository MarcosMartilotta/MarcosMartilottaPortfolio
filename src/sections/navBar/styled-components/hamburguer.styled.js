import styled from "styled-components";
import { theme } from "../../../theme/theme";
export const HamburguerContainer = styled.div`
	position: absolute;
	right: 2rem;
	width: 3rem;
	height: 3rem;
	background-color: ${theme.backgroundColor};
	display: flex;
	&:hover {
		cursor: pointer;
	}

	@media (min-width: 576px) {
		display: none;
	}
	.hamburguerIcon {
		position: relative;
		width: 80%;
		height: 80%;
		margin: auto;
		display: flex;
		align-items: center;
		transition: 0.5s;

		span {
			position: absolute;
			display: block;
			height: 0.2rem;
			width: 100%;
			background-color: ${theme.letterColor};
			transition: 0.5s;
			transition-delay: 0.5s;
		}

		span:nth-child(1) {
			top: 0;
			left: 0;
			width: 50%;
		}
		span:nth-child(2) {
			transform: scaleX(1);
			opacity: 1;
		}
		span:nth-child(3) {
			bottom: 0;
			right: 0;
			width: 50%;
		}
	}
	&.active span:nth-child(1) {
		width: 100%;
		transform: translateY(0.25rem);
		transition-delay: 0s;
	}
	&.active span:nth-child(2) {
		transform: scaleX(0);
		opacity: 0;
		transition-delay: 0s;
	}

	&.active span:nth-child(3) {
		bottom: 2rem;
		width: 100%;
		transform: rotate(90deg);
		transition-delay: 0s;
	}

	&.active .hamburguerIcon {
		transform: rotate(315deg);
	}
`;

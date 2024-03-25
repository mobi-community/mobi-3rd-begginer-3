import styled, { css } from "styled-components";

import { colors } from "../constants/design-tokens/color";
import { fontSize } from "../constants/design-tokens/font-size";
import sizes from "../constants/design-tokens/size";

const ColorCss = {
	neonPinkDark: {
		css: css`
			color: ${colors.SUB.secondary};
			background-color: ${colors.MAIN.default};
			border: 1px solid ${colors.SUB.secondary};
		`,
		activeBackground: `${colors.SUB.secondary}cc`,
	},
	neonGreenDark: {
		css: css`
			color: ${colors.SUB.neonGreen};
			background-color: ${colors.MAIN.default};
			border: 1px solid ${colors.SUB.neonGreen};
		`,
		activeBackground: `${colors.MAIN.default}cc`,
	},
	neonBlueDarkBlue: {
		css: css`
			color: ${colors.MAIN.neonBlue};
			background-color: ${colors.MAIN.darkBlue};
			border: 1px solid ${colors.border.primary};
		`,
		activeBackground: `${colors.MAIN.darkBlue}cc`,
	},
	neonOrangeYellow: {
		css: css`
			color: ${colors.SUB.neonOrange};
			background-color: ${colors.SUB.neonYellow};
			border: 1px solid ${colors.border.neonOrange};
		`,
		activeBackground: `${colors.SUB.neonYellow}cc`,
	},

	neonYellowDark: {
		css: css`
			color: ${colors.SUB.neonYellow};
			background-color: ${colors.MAIN.default};
			border: 1px solid ${colors.SUB.neonYellow};
		`,
		activeBackground: `${colors.MAIN.default}cc`,
	},
	neonOrangeBlue: {
		css: css`
			color: ${colors.SUB.neonOrange};
			background-color: ${colors.background.primary};
			border: 1px solid ${colors.border.neonOrange};
		`,
		activeBackground: `${colors.background.primary}cc`,
	},
};

const SizeCss = {
	small: css`
		width: ${sizes.button.small.width};
		height: ${sizes.button.small.height};
		font-size: ${fontSize.small};
	`,
	medium: css`
		width: ${sizes.button.medium.width};
		height: ${sizes.button.medium.height};
		font-size: ${fontSize.medium};
	`,
	large: css`
		width: ${sizes.button.large.width};
		height: ${sizes.button.large.height};
		font-size: ${fontSize.large};
	`,
};

export const SButton = styled.button`
	border-radius: 4px;
	cursor: pointer;

	${({ theme }) => ColorCss[theme]?.css}
	${({ size }) => SizeCss[size]}

    &:active {
		transform: scale(0.98);
		background-color: ${({ theme }) => ColorCss[theme]?.activeBackground};
	}
`;

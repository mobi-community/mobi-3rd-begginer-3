import styled, { css } from "styled-components";
import { colors } from "../constants/design-token/color";
import { fontSize, sizes } from "../constants/design-token/size";

const ColorCSS = {
    deepDark: {
        css: css`
            color: ${colors.WHITE.veryLightGray};
            background-color: ${colors.BLACK.darkBlack};
            border: 1px solid ${colors.GRAY.darkGray};
        `,
        activeBackground: `${colors.GRAY.veryLightGray}`,
    },
    defaultGray: {
        css: css`
            color: ${colors.WHITE.default};
            background-color: ${colors.GRAY.default};
            border: 1px solid ${colors.BLACK.default};
        `,
        activeBackground: `${colors.GRAY.nearBlackGray}`,
    },
    verylightWhith: {
        css: css`
            color: ${colors.GRAY.veryLightGray};
            background-color: ${colors.WHITE.veryLightGray};
            border: 1px solid ${colors.BLACK.deepGrayBlack};
        `,
        activeBackground: `${colors.GRAY.mediumDarkGray}`,
    },
    mediumGray: {
        css: css`
            color: ${colors.WHITE.veryLightGray};
            background-color: ${colors.GRAY.veryLightGray};
            border: 1px solid ${colors.BLACK.deepGrayBlack};
        `,
        activeBackground: `${colors.GRAY.darkGray}`,
    },
    disabled: {
        css: css`
            color: ${colors.WHITE.default};
            background-color: ${colors.GRAY.default};
            border: none;
        `,
    },
};

const SizeCSS = {
    small: css`
        width: ${sizes.button.smail.width};
        height: ${sizes.button.smail.height};
        font-size: ${sizes.fontSize.small};
    `,
    medium: css`
        width: ${sizes.button.medium.width};
        height: ${sizes.button.medium.height};
        font-size: ${sizes.fontSize.medium};
    `,
    large: css`
        width: ${sizes.button.large.width};
        height: ${sizes.button.large.height};
        font-size: ${sizes.fontSize.large};
    `,
};

export const SButton = styled.button`
    border-radius: 4px;
    cursor: pointer;

    ${({ theme }) => ColorCSS[theme]?.css}
    ${({ size }) => SizeCSS[size]}

    &:active {
        transform: scale(0.98);
        background-color: ${({ theme }) => ColorCSS[theme]?.activeBackground};
    }
`;

import styled, { css } from "styled-components";
import { colors } from "../constants/design-token/color";
import { sizes } from "../constants/design-token/size";

const ColorCSS = {
    richGrayBlack: css`
        color: ${colors.WHITE.cream};
        background-color: ${colors.BLACK.richGrayBlack};
        border: 1px solid ${colors.GRAY.veryDarkGray};
    `,
    creamWhite: css`
        color: ${colors.BLACK.richGrayBlack};
        background-color: ${colors.WHITE.cream};
        border: 1px solid ${colors.GRAY.veryLightGray};
    `,
    mediumDarkGray: css`
        color: ${colors.WHITE.cream};
        background-color: ${colors.BLACK.nearlyBlack};
        border: 1px solid ${colors.BLACK.richGrayBlack};
    `,
};

const SizeCSS = {
    small: css`
        width: ${sizes.textarea.smail};
        height: ${sizes.textarea.smail};
        font-size: ${sizes.fontSize.small};
    `,
    medium: css`
        width: ${sizes.textarea.medium};
        height: ${sizes.textarea.medium};
        font-size: ${sizes.fontSize.small};
    `,
    large: css`
        width: ${sizes.textarea.large};
        height: ${sizes.textarea.large};
        font-size: ${sizes.fontSize.small};
    `,
};

export const STextarea = styled.textarea`
    border-radius: 4px;
    ${({ theme }) => ColorCSS[theme]}
    ${({ size }) => SizeCSS[size]}
`;

export const SError = {
    color: `${colors.SYSTEM.error}`,
};

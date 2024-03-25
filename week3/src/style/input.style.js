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
        padding: ${sizes.input.small.padding};
        font-size: ${sizes.fontSize.small};
    `,
    medium: css`
        padding: ${sizes.input.medium.padding};
        font-size: ${sizes.fontSize.medium};
    `,
    large: css`
        padding: ${sizes.input.large.padding};
        font-size: ${sizes.fontSize.large};
    `,
};

export const SInput = styled.input`
    border-radius: 4px;
    ${({ theme }) => ColorCSS[theme]}
    ${({ size }) => SizeCSS[size]}
`;

export const SError = {
    color: `${colors.SYSTEM.error}`,
};

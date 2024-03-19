import styled, { css } from "styled-components";
import { COLORS } from "../../designToken/color";
import { SIZES } from "../../designToken/size";
import { BORDERRADIUS } from "../../designToken/border";

const inputColorCss = {
    mainPurple: {
        css: css`
            background-color: ${COLORS.MAIN.base};
            color: ${COLORS.SYSTEM.black};
            /* border-radius: ${BORDERRADIUS.md}; */
        `,
    },
    teal: {
        css: css`
            background-color: ${COLORS.PALLETE.teal.base};
            color: ${COLORS.SYSTEM.black};
            /* border-radius: ${BORDERRADIUS.md}; */
        `,
    },
    green: {
        css: css`
            background-color: ${COLORS.PALLETE.green.base};
            color: ${COLORS.SYSTEM.black};
            /* border-radius: ${BORDERRADIUS.md}; */
        `,
    },
    gray: {
        css: css`
            background-color: ${COLORS.PALLETE.gray.base};
            color: ${COLORS.SYSTEM.black};
            /* border-radius: ${BORDERRADIUS.md}; */
        `,
    },
    peach: {
        css: css`
            background-color: ${COLORS.PALLETE.peach.weight};
            color: ${COLORS.SYSTEM.black};
            /* border-radius: ${BORDERRADIUS.md}; */
        `,
    },
    lemon: {
        css: css`
            background-color: ${COLORS.PALLETE.lemon};
            color: ${COLORS.SYSTEM.black};
            /* border-radius: ${BORDERRADIUS.md}; */
        `,
    },
};

const inputSizeCss = {
    small: {
        css: css`
            width: ${SIZES.INPUT.small.width};
            height: ${SIZES.INPUT.small.height};
        `,
    },
    medium: {
        css: css`
            width: ${SIZES.INPUT.medium.width};
            height: ${SIZES.INPUT.medium.height};
        `,
    },
    large: {
        css: css`
            width: ${SIZES.INPUT.large.width};
            height: ${SIZES.INPUT.large.height};
        `,
    },
};

export const StyleInput = styled.input`
    border: 5px;
    ${({ color }) => inputColorCss[color].css}
    ${({ size }) => inputSizeCss[size].css} /* &:active {
        transform: scale(0.8);
    } */
`;

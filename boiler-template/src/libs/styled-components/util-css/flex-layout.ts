import {css} from 'styled-components'

export const DIRECTION_COLUMN = css`
	display: flex;
	flex-direction: column;
`
export const ALIGN_CENTER = css`
	display: flex;
	align-items: center;
`
export const ALIGN_END = css`
	display: flex;
	align-items: end;
`
export const JUSTIFY_CENTER = css`
	display: flex;
	justify-content: center;
`
export const JUSTIFY_END = css`
	display: flex;
	justify-content: end;
`
export const FLEX_CENTER = css`
	${ALIGN_CENTER}
	${JUSTIFY_CENTER}
`
export const FLEX_END = css`
	${ALIGN_END}
	${JUSTIFY_END}
`

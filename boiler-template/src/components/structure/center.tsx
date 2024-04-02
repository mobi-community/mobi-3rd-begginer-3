import {
	ALIGN_CENTER,
	FLEX_CENTER,
	JUSTIFY_CENTER,
} from '@/libs/styled-components/util-css'
import type {
	AxisType,
	OptionalChromaType,
	OptionalDirectionType,
	OptionalPaddingSizeType,
	OptionalSizeType,
} from '@/types'
import type {PropsWithChildren} from 'react'
import styled, {RuleSet, css} from 'styled-components'

interface CenterProps
	extends OptionalSizeType,
		OptionalChromaType,
		OptionalDirectionType,
		OptionalPaddingSizeType,
		PropsWithChildren {}

/** 자식 컴포넌트 중앙 정렬 */
const Center = ({
	width,
	height,
	direction = 'both',
	bgColor = 'transparent',
	px = '0rem',
	py = '0rem',
	children,
}: CenterProps) => {
	return (
		<S.Container
			$width={width}
			$height={height}
			$bgColor={bgColor}
			$px={px}
			$py={py}
			direction={direction}
		>
			{children}
		</S.Container>
	)
}

export default Center

const DirectionCSS: {[key in AxisType]: RuleSet} = {
	both: css`
		${FLEX_CENTER}
	`,
	horizontal: css`
		${JUSTIFY_CENTER}
	`,
	vertical: css`
		${ALIGN_CENTER}
	`,
}

const Container = styled.div<CenterProps>`
	width: ${({$width}) => $width};
	height: ${({$height}) => $height};
	background-color: ${({$bgColor}) => $bgColor};
	padding: ${({$py, $px}) => `${$py} ${$px}`};
	${({direction}) => DirectionCSS[direction!]}
`

const S = {
	Container,
}

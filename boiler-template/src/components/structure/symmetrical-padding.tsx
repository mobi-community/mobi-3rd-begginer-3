import type {
	OptionalChromaType,
	OptionalPaddingSizeType,
	OptionalSizeType,
} from '@/types'
import type {PropsWithChildren} from 'react'
import styled from 'styled-components'

interface PaddingProps
	extends OptionalSizeType,
		OptionalChromaType,
		OptionalPaddingSizeType,
		PropsWithChildren {}

export const Padding = ({
	width = '0rem',
	height = '0rem',
	bgColor = 'transparent',
	p = '0rem',
	px,
	py,
	pt,
	pb,
	pr,
	pl,
	children,
}: PaddingProps) => {
	return (
		<S.Container
			$width={width}
			$height={height}
			$bgColor={bgColor}
			$p={p}
			$px={px}
			$py={py}
			$pt={pt}
			$pb={pb}
			$pr={pr}
			$pl={pl}
		>
			{children}
		</S.Container>
	)
}

const Container = styled.div<PaddingProps>`
	width: ${({$width}) => $width};
	height: ${({$height}) => $height};
	background-color: ${({$bgColor}) => $bgColor};

	padding: ${({$p}) => $p};

	padding-left: ${({$px}) => !!$px && $px};
	padding-right: ${({$px}) => !!$px && $px};
	padding-top: ${({$py}) => !!$py && $py};
	padding-bottom: ${({$py}) => !!$py && $py};

	padding-left: ${({$pl}) => !!$pl && $pl};
	padding-right: ${({$pr}) => !!$pr && $pr};
	padding-top: ${({$pt}) => !!$pt && $pt};
	padding-bottom: ${({$pb}) => !!$pb && $pb};
`
const S = {
	Container,
}

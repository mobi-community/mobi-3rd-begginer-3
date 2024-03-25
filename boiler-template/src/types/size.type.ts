export interface SizeType {
	width: string
	height: string

	// styled-components 미사용시, 이 아래 제거
	$width: string
	$height: string
}
export interface OptionalSizeType extends Partial<SizeType> {}

export interface PaddingSizeType {
	p: string
	px: string
	py: string
	pt: string
	pb: string
	pr: string
	pl: string

	// styled-components 미사용시, 이 아래 제거
	$p: string
	$px: string
	$py: string
	$pt: string
	$pb: string
	$pr: string
	$pl: string
}
export interface OptionalPaddingSizeType extends Partial<PaddingSizeType> {}

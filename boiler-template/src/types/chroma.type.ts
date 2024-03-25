export interface ChromaType {
	color: string
	bgColor: string
	borderColor: string

	// styled-components 미사용시, 이 아래 제거
	$color: string
	$bgColor: string
	$borderColor: string
}

export interface OptionalChromaType extends Partial<ChromaType> {}

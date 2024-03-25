export type AxisType = 'both' | 'vertical' | 'horizontal'

export interface DirectionType {
	direction: AxisType
}

export interface OptionalDirectionType extends Partial<DirectionType> {}

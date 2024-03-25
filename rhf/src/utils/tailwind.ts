import type {ClassValue} from 'clsx'
import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export const tailwindMerge = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

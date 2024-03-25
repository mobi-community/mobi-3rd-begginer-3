import {tailwindMerge} from '@/utils'
import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {forwardRef, type InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	scale: keyof typeof SizeVariants
	icon?: IconProp
}

const SizeVariants = {
	size: 'w-48',
	large: 'w-64',
	full: 'w-full',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({scale, icon, ...rest}, ref) => (
		<div
			className={tailwindMerge(
				SizeVariants[scale],
				'flex items-center gap-2 h-12 p-1 border-2 rounded-sm border-gray-500 focus-within:border-green-500',
			)}
		>
			{icon && (
				<FontAwesomeIcon {...{icon}} size='sm' className='text-inherit' />
			)}
			<input
				className='w-full h-full placeholder:text-gray-700 text-white focus:text-green-500'
				autoComplete='off'
				{...{ref}}
				{...rest}
			/>
		</div>
	),
)

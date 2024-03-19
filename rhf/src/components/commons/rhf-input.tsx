import {tailwindMerge} from '@/utils'
import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	scale: keyof typeof SizeVariants
	icon?: IconProp
	onClickIcon?: VoidFunction
}

const SizeVariants = {
	size: 'w-48',
	large: 'w-64',
	full: 'w-full',
}

export const Input = ({scale, icon, onClickIcon, ...rest}: InputProps) => {
	return (
		<div
			className={tailwindMerge(
				SizeVariants[scale],
				'h-28 grid grid-rows-[2fr_1fr] items-center',
			)}
		>
			<div className='flex items-center w-full h-fit p-1 rounded-md border border-sky-500 focus-within:border-sky-700 focus-within:'>
				<input className='w-full h-full' {...rest} />
				{icon && <FontAwesomeIcon {...{icon}} onClick={onClickIcon} />}
			</div>
			<div className='w-full'>
				<p className='text-ti text-red-600'>이것은 에러여</p>
			</div>
		</div>
	)
}

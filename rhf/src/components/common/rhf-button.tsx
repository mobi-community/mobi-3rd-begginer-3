import type {ButtonHTMLAttributes, PropsWithChildren} from 'react'

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {
	children: string
}

export const Button = ({children, ...rest}: ButtonProps) => {
	return (
		<button
			className='bg-transparent w-full h-12 rounded-sm border-2 border-solid border-gray active:text-green-500 active:border-green-500'
			{...rest}
		>
			{children}
		</button>
	)
}

import {Button, Input} from '@/components/common'
import {FORM_REGISTER_EMAIL, FORM_REGISTER_PASSWORD} from '@/constants'
import {useManageSingleParams} from '@/hooks'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object().shape({
	[FORM_REGISTER_EMAIL]: yup
		.string()
		.email('이메일 형식을 지켜주세요.')
		.required('작성하지 않았습니다.'),
	[FORM_REGISTER_PASSWORD]: yup
		.string()
		.min(8, '최소 8자 입력해야 합니다.')
		.matches(/[a-z]+/, '소문자를 포함해야 합니다.')
		.matches(/[A-Z]+/, '대문자를 포함해야 합니다.')
		.matches(/[\W]+/, '특수문자를 포함해야 합니다.')
		.required('작성하지 않았습니다.'),
})

export const ID_PW = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: {errors},
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
	})

	const {getParams, setParams} = useManageSingleParams()
	const navi = useNavigate()


	useEffect(() => {
		setValue(FORM_REGISTER_EMAIL,getParams())
	},[])

	const params = getParams([
		{
			paramKey: FORM_REGISTER_EMAIL,
			paramValue: '',
		},
		{
			paramKey: FORM_REGISTER_PASSWORD,
			paramValue: '',
		},
	])

	const errorInfoArray = Object.entries(errors)?.map((error) => ({
		key: error[0],
		message: error[1].message,
	}))

	const onSubmit = (data: {email: string; password: string}) => {
		setParams([
			{
				paramKey: FORM_REGISTER_EMAIL,
				paramValue: data.email,
			},
			{
				paramKey: FORM_REGISTER_PASSWORD,
				paramValue: data.password,
			},
		])
		navi('/ph-bday', {
			state: {
				[FORM_REGISTER_EMAIL]: data.email,
				[FORM_REGISTER_PASSWORD]: data.password,
			},
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col items-start justify-center gap-5  w-[30rem] h-[30rem]'>
				<Input
					scale='full'
					defaultValue={params[0]}
					{...register(FORM_REGISTER_EMAIL)}
					placeholder='email'
				/>
				<Input
					scale='full'
					defaultValue={params[1]}
					{...register(FORM_REGISTER_PASSWORD)}
					placeholder='password'
					type='password'
					// type='password'
				/>
				<div>
					{errorInfoArray.map((errorInfo) => (
						<p key={errorInfo.key} className='text-ti text-red-600'>
							{errorInfo.key} : {errorInfo.message}
						</p>
					))}
				</div>
			</div>

			<Button>버튼</Button>
		</form>
	)
}

import {Button, Input} from '@/components/common'
import {FORM_REGISTER_EMAIL, FORM_REGISTER_PASSWORD} from '@/constants'
import {useManageSingleParams} from '@/hooks'
import {getFormErrorArray} from '@/utils'
import {yupResolver} from '@hookform/resolvers/yup'
import {useEffect} from 'react'
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
		// 현재 페이지에서 이미 기록된 값이 있다면, input 태그에 삽입
		const savedParams = getParams([FORM_REGISTER_EMAIL, FORM_REGISTER_PASSWORD])
		setValue(FORM_REGISTER_EMAIL, savedParams[0])
		setValue(FORM_REGISTER_PASSWORD, savedParams[1])
	}, [])

	const formErrorArray = getFormErrorArray(errors)

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
					{...register(FORM_REGISTER_EMAIL)}
					placeholder='email'
				/>
				<Input
					scale='full'
					{...register(FORM_REGISTER_PASSWORD)}
					placeholder='password'
					type='password'
					// type='password'
				/>
				<div>
					{formErrorArray.map((formError) => (
						<p key={formError.formKey} className='text-ti text-red-600'>
							{formError.formKey} : {formError.errorMessage}
						</p>
					))}
				</div>
			</div>

			<Button>버튼</Button>
		</form>
	)
}

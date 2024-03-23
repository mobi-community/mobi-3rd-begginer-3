import {Button, Input} from '@/components/common'
import {FORM_REGISTER_BIRTHDAY, FORM_REGISTER_PHONE_NUMBER} from '@/constants'
import {useManageSingleParams} from '@/hooks'
import {getFormErrorArray} from '@/utils'
import {yupResolver} from '@hookform/resolvers/yup'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useLocation, useNavigate} from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object().shape({
	[FORM_REGISTER_PHONE_NUMBER]: yup
		.string()
		.matches(/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/, 'xxx-xxxx-xxxx 형식을 지켜주세요.')
		.length(13, '13 자를 입력해야 합니다.')
		.required('작성하지 않았습니다.'),
	[FORM_REGISTER_BIRTHDAY]: yup
		.string()
		.matches(
			/^\b(?:19|20)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])\b$/,
			'yyyy-mm-dd 형식을 지켜주세요.',
		)
		.required('작성하지 않았습니다.'),
})

export const PH_BDAY = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: {errors},
	} = useForm({mode: 'onChange', resolver: yupResolver(schema)})
	const {getParams, setParams} = useManageSingleParams()
	const navi = useNavigate()
	const location = useLocation()

	useEffect(() => {
		// 현재 페이지에서 이미 기록된 값이 있다면, input 태그에 삽입
		const savedParams = getParams([
			FORM_REGISTER_PHONE_NUMBER,
			FORM_REGISTER_BIRTHDAY,
		])
		setValue(FORM_REGISTER_PHONE_NUMBER, savedParams[0])
		setValue(FORM_REGISTER_BIRTHDAY, savedParams[1])
	}, [])

	const formErrorArray = getFormErrorArray(errors)

	const onSubmit = (data: {
		[FORM_REGISTER_PHONE_NUMBER]: string
		[FORM_REGISTER_BIRTHDAY]: string
	}) => {
		setParams([
			{
				paramKey: FORM_REGISTER_PHONE_NUMBER,
				paramValue: data[FORM_REGISTER_PHONE_NUMBER],
			},
			{
				paramKey: FORM_REGISTER_BIRTHDAY,
				paramValue: data[FORM_REGISTER_BIRTHDAY],
			},
		])
		navi('/cmt', {
			state: {
				...location?.state,
				[FORM_REGISTER_PHONE_NUMBER]: data[FORM_REGISTER_PHONE_NUMBER],
				[FORM_REGISTER_BIRTHDAY]: data[FORM_REGISTER_BIRTHDAY],
			},
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col items-start justify-center gap-5  w-[30rem] h-[30rem]'>
				<Input
					scale='full'
					{...register(FORM_REGISTER_PHONE_NUMBER)}
					placeholder={FORM_REGISTER_PHONE_NUMBER}
				/>
				<Input
					scale='full'
					{...register(FORM_REGISTER_BIRTHDAY)}
					placeholder={FORM_REGISTER_BIRTHDAY}
					type='date'
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

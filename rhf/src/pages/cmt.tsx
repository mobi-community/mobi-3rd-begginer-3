import {Button, Input} from '@/components/common'
import {FORM_REGISTER_WANT_TO_SAY} from '@/constants'
import {useManageSingleParams} from '@/hooks'
import {getFormErrorArray} from '@/utils'
import {yupResolver} from '@hookform/resolvers/yup'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useLocation} from 'react-router-dom'
import * as yup from 'yup'

const schema = yup.object().shape({
	[FORM_REGISTER_WANT_TO_SAY]: yup
		.string()
		.min(100, '최소 100자 입력해야 합니다.')
		.max(300, '최대 300자 입력해야 합니다.')
		.required('작성하지 않았습니다.'),
})

export const CMT = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: {errors},
	} = useForm({mode: 'onChange', resolver: yupResolver(schema)})
	const {getParams, setParams} = useManageSingleParams()
	const location = useLocation()

	useEffect(() => {
		// 현재 페이지에서 이미 기록된 값이 있다면, input 태그에 삽입
		const savedParams = getParams([FORM_REGISTER_WANT_TO_SAY])
		setValue(FORM_REGISTER_WANT_TO_SAY, savedParams[0])
	}, [])

	const formErrorArray = getFormErrorArray(errors)

	const onSubmit = (data: {[FORM_REGISTER_WANT_TO_SAY]: string}) => {
		alert('회원 가입이 완료되었습니다. 🎉')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col items-start justify-center gap-5  w-[30rem] h-[30rem]'>
				<Input
					scale='full'
					{...register(FORM_REGISTER_WANT_TO_SAY)}
					placeholder={FORM_REGISTER_WANT_TO_SAY}
				/>

				<div>
					{' '}
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

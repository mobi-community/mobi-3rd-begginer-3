import {
	FORM_REGISTER_BIRTHDAY,
	FORM_REGISTER_EMAIL,
	FORM_REGISTER_PHONE_NUMBER,
} from '@/constants'
import {yupResolver} from '@hookform/resolvers/yup'
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
		handleSubmit,
		formState: {errors},
	} = useForm({mode: 'onChange', resolver: yupResolver(schema)})

	const location = useLocation()
	const navi = useNavigate()

	const errorInfoArray = Object.entries(errors)?.map((error) => ({
		key: error[0],
		message: error[1].message,
	}))

	const onClickNextStep = () => {
		// navi('/cmt', {
		// 	state: {
		// 		[FORM_REGISTER_PHONE_NUMBER]:
		// 	}
		// })
	}

	const onClickButton = () => {
		navi('/cmt')
	}
	const onClickBackButton = () => {
		navi(-1)
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

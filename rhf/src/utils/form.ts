import type {FormErrorType} from '@/types'
import type {FieldErrors} from 'react-hook-form'

/**  formState 중 errors 속성 그대로 넣어주세요. */
export const getFormErrorArray = (
	errors: FieldErrors,
): Array<FormErrorType> => {
	const formErrorArray = Object.entries(errors)?.map((error) => {
		const formKey = error[0]
		const errorMessage = error[1]!.message as string
		return {
			formKey,
			errorMessage,
		}
	})
	return formErrorArray
}

import {useSearchParams} from 'react-router-dom'

interface ParamInfoType {
	paramKey: string
	paramValue: string
}
/**
 * @description search parameter 로 *단일값* 을 관리하는 custom-hook
 */
export const useManageSingleParams = () => {
	const [param, setParam] = useSearchParams()
	/**
	 * @description
	 * ㅁ
	 */
	const getParams = (paramKeyArray: Array<string>): Array<string> => {
		const result = paramKeyArray.map((paramKey) => {
			if (!param.has(paramKey)) return '' // 없으면 '' 반환
			return param.get(paramKey)! // 있으면 url 에 저장된 값 반환
		})
		return result
	}
	/**
	 * @description
	 * - param-key 와 param-value 로 이뤄진 object 배열을 입력 받는다.
	 * - param-key 에 대한 param-value 를 할당한다.
	 */
	const setParams = (paramInfoArray: Array<ParamInfoType>): void => {
		paramInfoArray.forEach((paramInfo) => {
			param.set(paramInfo.paramKey, paramInfo.paramValue)
		})
		setParam(param)
	}
	return {getParams, setParams}
}

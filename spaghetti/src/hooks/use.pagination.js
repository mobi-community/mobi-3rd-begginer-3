import { useSearchParams } from 'react-router-dom'
import {
	PARAM_CURRENT_PAGE,
	PARAM_END_PAGE,
	PARAM_PER_PAGE,
	PARAM_START_PAGE,
	PARAM_TOTAL_PAGE
} from '../constants'

export const usePagination = () => {
	const [params, setParams] = useSearchParams()

	/**
	 * @description 현재 위치한 페이지를 기준으로 '이전' 버튼을 생성해야하는지 t/f 반환
	 * @returns {boolean}
	 */
	const checkIsPrevButtonVisible = () => {
		const startPage = params.get(PARAM_START_PAGE)
		return !!startPage && parseInt(startPage) !== 1
	}
	/**
	 * @description 현재 위치한 페이지를 기준으로 '다음' 버튼을 생성해야하는지 t/f 반환
	 * @returns {boolean}
	 */
	const checkIsNextButtonVisible = () => {
		const currentPage = params.get(PARAM_CURRENT_PAGE)
		const totalPage = params.get(PARAM_TOTAL_PAGE)
		const perPage = params.get(PARAM_PER_PAGE)
		return (
			!!currentPage &&
			!!totalPage &&
			!!perPage &&
			(Math.ceil(+currentPage / +perPage) !== Math.ceil(+totalPage / +perPage))
		)
	}
	/**
	 * @description 
	 * - url 에서 관리하는 페이지네이션 관련 파라미터 조회
	 * - paramKey 를 활용해 페이지네이션 값을 반환
	 * - 페이지네이션 관련 파라미터에 관한 paramKey 는 `src > constants > search.key.js` 에서 관리
	 * - defaultValue 설정 시 조회한 값이 없을 경우, defaultValue 를 반환
	 * @returns {boolean}
	 */
	const getPaginationParam = (paramKey, defaultValue = 1) => {
		if (!params.has(paramKey)) return defaultValue
		return parseInt(params.get(paramKey))
	}
	/**
	 * @description 새로운 페이지로 이동
	 * @param {number} page 이동할 페이지 번호
	 * @returns 
	 */
	const updateCurrentPage = (page) => {
		const totalPage = parseInt(params.get(PARAM_TOTAL_PAGE) ?? '1')
		const currentPage = pageInt(params.get(PARAM_CURRENT_PAGE) ?? '1')
		if (page < 1 || totalPage < page) return
		if (page === currentPage) return
		params.set(PARAM_CURRENT_PAGE, page)
		setParams(params)
	}
	/**
	 * @description 페이지네이션 관련 parameter, url 에서 저장
	 * @param {string} startPage 시작페이지 번호
	 * @param {string} endPage 마지막 페이지 번호
	 * @param {string} currentPage 현재 페이지 번호
	 * @param {string} totalPage 총 페이지 갯수
	 * @param {string} perPage 페이지네이션 출력 단위
	 */
	const registerPaginationParams = ({ startPage, endPage, currentPage, totalPage, perPage }) => {
		params.set(PARAM_START_PAGE, startPage)
		params.set(PARAM_END_PAGE, endPage)
		params.set(PARAM_CURRENT_PAGE, currentPage)
		params.set(PARAM_TOTAL_PAGE, totalPage)
		params.set(PARAM_PER_PAGE, perPage)
		setParams(params)
	}
	return {
		getPaginationParam,
		updateCurrentPage,
		registerPaginationParams,
		checkIsNextButtonVisible,
		checkIsPrevButtonVisible
	}
}
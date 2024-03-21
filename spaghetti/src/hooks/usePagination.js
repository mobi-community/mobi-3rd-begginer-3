import { useSearchParams } from 'react-router-dom'
import {
  PARAM_CURRENT_PAGE,
  PARAM_END_PAGE,
  PARAM_START_PAGE,
  PARAM_TOTAL_PAGE
} from '../constants'

export const usePagination = () => {
	const [params, setParams] = useSearchParams()

	const checkIsPrevButtonVisible = () => {
    const startPage = parseInt(params.get(PARAM_START_PAGE))
		return startPage !== 1
	}

	/**
	 * @param {number} perPage 한번에 보여지는 페이지 수
	 */
	const checkIsNextButtonVisible = (perPage) => {
		const currentPage = parseInt(params.get(PARAM_CURRENT_PAGE))
		const totalPage = parseInt(params.get(PARAM_TOTAL_PAGE))
		return Math.ceil(currentPage / perPage) !== Math.ceil(totalPage / perPage)
	}

	const getPaginationParam = (paramKey, defaultValue = 1) => {
		if (!params.has(paramKey)) return defaultValue
		return parseInt(params.get(paramKey))
	}

	const updateCurrentPage = (page) => {
		const totalPage = params.get(PARAM_TOTAL_PAGE) ?? 1
		if (page < 1 || totalPage < page) return
		params.set(PARAM_CURRENT_PAGE, page)
		setParams(params)
	}

	const registerPaginationParams = ({ startPage, endPage, currentPage, totalPage }) => {
		params.set(PARAM_START_PAGE, startPage)
		params.set(PARAM_END_PAGE, endPage)
		params.set(PARAM_CURRENT_PAGE, currentPage)
		params.set(PARAM_TOTAL_PAGE, totalPage)
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
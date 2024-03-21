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

	const checkIsPrevButtonVisible = () => {
    const startPage = parseInt(params.get(PARAM_START_PAGE))
		return startPage !== 1
	}
	const checkIsNextButtonVisible = () => {
		const currentPage = parseInt(params.get(PARAM_CURRENT_PAGE))
		const totalPage = parseInt(params.get(PARAM_TOTAL_PAGE))
		const perPage = parseInt(params.get(PARAM_PER_PAGE))
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
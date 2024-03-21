import { PARAM_END_PAGE, PARAM_START_PAGE } from '../constants'
import { usePagination } from '../hooks/usePagination'

const Pagination = () => {
	const {
		getPaginationParam,
		updateCurrentPage,
		checkIsPrevButtonVisible,
		checkIsNextButtonVisible
	} = usePagination()

	const startPage = getPaginationParam(PARAM_START_PAGE)
	const endPage = getPaginationParam(PARAM_END_PAGE)

	const isPrevButtonVisible = checkIsPrevButtonVisible()
	const isNextButtonVisible = checkIsNextButtonVisible(10)

	return (
		<div>
			{isPrevButtonVisible && (
				<button onClick={() => updateCurrentPage(startPage - 1)}>이전</button>
			)}
			{Array.from({
				length: endPage - startPage + 1
			}).map((_, i) => {
				const page = startPage + i
				return (
					<button key={i} onClick={() => updateCurrentPage(page)}>
						{startPage + i}
					</button>
				)
			})}
			{isNextButtonVisible && <button onClick={() => updateCurrentPage(endPage + 1)}>다음</button>}
		</div>
	)
}
export default Pagination

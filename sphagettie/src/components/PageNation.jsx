import { useEffect } from "react"
import { useFetchPageNation, useURLManipulator } from "../hooks"

const PageNation = ({ path }) => {
  const { pageNation } = useFetchPageNation({ path })
  const { getParamValues, setParamValues } = useURLManipulator()
  const { take, limit } = getParamValues()

  const onClickPage = ({ page }) => {
    setParamValues({ page, take, limit })
  }

  if (!pageNation) return
  const { startPage, totalPage, endPage } = pageNation
  const isPrevPageVisible = startPage !== 1
  const isNextPageVisible = startPage + parseInt(take) < totalPage

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => onClickPage({ page: startPage - 1 })}>
          이전
        </button>
      )}
      {Array(endPage - startPage + 1)
        .fill()
        .map((_, i) => startPage + i)
        .map((page) => (
          <button key={page} onClick={() => onClickPage({ page: page })}>
            {page}
          </button>
        ))}
      {isNextPageVisible && (
        <button onClick={() => onClickPage({ page: endPage + 1 })}>다음</button>
      )}
    </div>
  )
}
export default PageNation

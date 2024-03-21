import { useEffect, useState } from "react"
import { PARAM_CURRENT_PAGE } from "../constants"
import { fetchDataListAndPagination } from "../utils"
import { usePagination } from "./usePagination"

export const useFetchDataListAndPagination = (fetchParameter) => {
  const [dataList, setDataList] = useState([])
  const { getPaginationParam, registerPaginationParams } = usePagination()
  
  const currentPage = getPaginationParam(PARAM_CURRENT_PAGE);
  
  const asyncFetching = async () => {
    const { dataList, pagination } = await fetchDataListAndPagination({ ...fetchParameter, page: currentPage })
    registerPaginationParams({ ...pagination })
    setDataList(dataList)
  }
  useEffect(() => {
    asyncFetching()
  }, [currentPage])

  return {dataList}
}
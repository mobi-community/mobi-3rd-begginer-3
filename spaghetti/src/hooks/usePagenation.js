import { useSearchParams } from "react-router-dom";

export const usePagenation = () => {
  const [params, setParams] = useSearchParams()
  
  const setPagenationParams = ({
    startPage,
    endPage,
    currentPage,
    totalPage,
    perPage,
  }) => {
    params.set(PARAM_START_PAGE, startPage);
    params.set(PARAM_END_PAGE, endPage);
    params.set(PARAM_CURRENT_PAGE, currentPage);
    params.set(PARAM_TOTAL_PAGE,totalPage);
    params.set(PARAM_PER_PAGE,perPage);
    setParams(params)
  }
  const getSinglePagenationParam = (paramKey, defaultValue=0) => {
    if (!params.has(paramKey)) return defaultValue
    return paramKey.get(paramKey)
  }
  return {setPagenationParams,getSinglePagenationParam}
}
import { useSearchParams } from "react-router-dom"
import { KEY } from "../const"
import { useEffect } from "react"

export const useURLManipulator = () => {
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    setParamValues({ page: 1, take: 10, limit: 10 })
  }, [])

  /**
   * @description query key:value쌍을 반환
   */
  const getParamValues = () => {
    return {
      take: params.get(KEY.TAKE),
      page: params.get(KEY.PAGE),
      limit: params.get(KEY.LIMIT),
    }
  }
  /**
   * @description query key에 값을 선언
   */
  const setParamValues = ({ page, limit, take }) => {
    params.set(KEY.PAGE, page)
    params.set(KEY.LIMIT, limit)
    params.set(KEY.TAKE, take)
    setParams(params)
  }

  return { getParamValues, setParamValues }
}

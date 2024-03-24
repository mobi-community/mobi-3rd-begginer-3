import axios from "axios"
import { useEffect, useState } from "react"
import { useURLManipulator } from "./use-url-mainpulator"

export const useFetchPageNation = ({ path }) => {
  const [pageNation, setPageNation] = useState()
  const { getParamValues } = useURLManipulator()
  const { page } = getParamValues()

  useEffect(() => {
    fetchPageNationByPath({ path })
  }, [page])

  /**
   * @paramter path - string : "posts" | "comments"
   */
  const fetchPageNationByPath = async ({ path }) => {
    const response = await axios.get(`/api/${path}`, {
      params: getParamValues(),
    })
    setPageNation(response.data.PageNation)
  }

  return {
    fetchPageNationByPath,
    pageNation,
  }
}

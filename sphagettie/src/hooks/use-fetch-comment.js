import axios from "axios"
import { useState, useEffect } from "react"
import { useURLManipulator } from "./use-url-mainpulator"

export const useFetchComment = () => {
  const [commentList, setCommentList] = useState()
  const [isOpenCommentList, setIsOpenCommentList] = useState(false)
  const { getParamValues } = useURLManipulator()
  const { page } = getParamValues()

  useEffect(() => {
    if (!isOpenCommentList) return
    fetchCommnetList()
  }, [page])

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true)
    await fetchCommnetList()
  }

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false)
  }

  const fetchCommnetList = async () => {
    const response = await axios.get(`/api/comments`, {
      params: getParamValues(),
    })
    setCommentList(response.data.Comments)
  }

  return {
    fetchCommnetList,
    commentList,
    onClickMoreComments,
    onClickHiddenComments,
    isOpenCommentList,
  }
}

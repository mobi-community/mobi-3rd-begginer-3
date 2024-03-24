import axios from "axios"
import { useEffect, useState } from "react"
import { useURLManipulator } from "./use-url-mainpulator"

export const useFetchPost = () => {
  const [postList, setPostList] = useState()
  const { getParamValues } = useURLManipulator()
  const { page } = getParamValues()

  useEffect(() => {
    fetchPostList()
  }, [page])

  const fetchPostList = async () => {
    const response = await axios.get(`/api/posts`, {
      params: getParamValues(),
    })
    setPostList(response.data.Posts)
  }

  return {
    fetchPostList,
    postList,
  }
}

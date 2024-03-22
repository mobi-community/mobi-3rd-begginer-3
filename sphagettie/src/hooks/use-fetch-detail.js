import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchDetail = () => {
  const [postDetail, setPostDetail] = useState()

  useEffect(() => {
    fetchPostDetail()
  }, [])
  
  const fetchPostDetail = async () => {
    const response = await axios.get("/api/post")
    setPostDetail(response.data)
  }

  

  return {
    postDetail,
  }
}

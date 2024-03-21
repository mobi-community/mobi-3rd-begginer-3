import axios from "axios"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useFetchData = () => {
  const [params, setParams] = useSearchParams()
  const [postData, setPostData] = useState()
  const [postDetail, setPostDetail] = useState()

  /**
   * @parmeter keyArr - Array : [key,key, ...]
   */
  const getParamValues = ({ keyArr }) => {
    const urlObj = {}
    keyArr.forEach((key) => (urlObj[key] = params.get(key)))
    return urlObj
  }
  /**
   * @paramter keyValueArr - Array[Array] : [[key,value]...]
   */
  const setParamValues = ({ keyValueArr }) => {
    keyValueArr.forEach((keyVal) => params.set(keyVal[0], keyVal[1]))
    setParams(params)
  }

  /**
   * @description
   * @paramter page - string : url의 page값
   * @paramter limit - string : url의 limit
   * @paramter take - string : url의 take값
   * @paramter dataForm - string : "Posts" | "PageNation" | "Comments"
   * @paramter address - string : "posts" | "comments"
   */
  const fetchPostDataByUrlAndDataForm = async ({
    take,
    page,
    limit,
    dataForm = "Posts",
    address,
  }) => {
    const response = await axios.get(`/api/${address}`, {
      params: {
        take,
        page,
        limit,
      },
    })
    setPostData(response.data[dataForm])
  }
  const fetchPostDetail = async () => {
    const response = await axios.get("/api/post")
    setPostDetail(response.data)
  }

  return {
    getParamValues,
    setParamValues,
    fetchPostDataByUrlAndDataForm,
    fetchPostDetail,
    postData,
    postDetail,
  }
}

import { fetchPostDetailById, fetchWeather } from "../utils";

export const weatherLoader = async () => {
  const weather = await fetchWeather()
  return {weather}
}

export const postDetailLoader = async ({params}) => {
  const postId = params.postId
  const postDetail = await fetchPostDetailById(postId)
  return { postDetail }
}
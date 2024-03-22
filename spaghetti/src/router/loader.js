import { fetchPostDetailById } from "../utils"

export const postDetailLoader = async ({params}) => {
  const postId = params.postId
  const postDetail = await fetchPostDetailById(postId)
  return { postDetail }
}
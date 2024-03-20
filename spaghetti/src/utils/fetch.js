import axios from "axios";

export const fetchComment = async ({page, take,limit}) => {
  const response = await axios.get("/api/comments", {
    params: {page,limit,take},
  });
  return response.data;
}

// export const fetchPost = async () => {
//   const response 
// }
import axios from "axios";

export const fetchDataListAndPagination = async ({ endpoints, page = 1, take = 20, limit = 10 }) => {
  const response = await axios.get(endpoints, {
		params: { page, take, limit }
  })
  return response.data
}
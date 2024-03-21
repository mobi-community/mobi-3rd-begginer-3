import axios from "axios";

export const fetchDataListAndPagination = async ({ endpoints, page = 1, take = 20, limit = 10 }) => {
  const response = await axios.get(endpoints, {
		params: { page, take, limit }
  })
  const { PageNation: pagination, ...rest } = response.data
  const dataList = Object.values(rest)[0]
  return {dataList,pagination}
}
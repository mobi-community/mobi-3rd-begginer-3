import axios from "axios";

export const fetchDataListAndPagination = async ({ endpoints, page = 1, take = 20, limit = 10 }) => {
	const result = { dataList: {}, pagination: {} }
	try {
		const response = await axios.get(endpoints, {
			params: { page, take, limit }
		})
		const { PageNation: pagination, ...rest } = response.data
		const dataList = Object.values(rest)[0]
		result.pagination = pagination
		result.dataList = dataList
		return result
	}
	catch {
		return result
	}
}

export const fetchPostDetailById = async (postId) => {
	const result = {}
	try {
		const response = await axios.get(`/api/post/${postId}`)
		return response.data
	} catch { 
		return result
	}
}
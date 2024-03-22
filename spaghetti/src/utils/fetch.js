import axios from 'axios';
import { weatherConfig } from '../third-party/weather.config';

export const fetchWeather = async () => {
	let result = []
	try {
		const response = await axios.get("/getUltraSrtNcst", {
			baseURL: weatherConfig.api,
			params: {
				serviceKey: weatherConfig.secret_key,
				dataType: "JSON",
				base_date: new Date()
					.toISOString()
					.substring(0, 10)
					.replace(/-/g, ""),
				base_time: "0600",
				nx: 60,
				ny: 127,
			},
		});
		result = (response.data.response.body.items.item);
	} catch (err) {
		result = []
		throw new Error("failed load weather api");
	}
	finally {
		return result
	}
}

export const fetchDataListAndPagination = async ({
	endpoints,
	page = 1,
	take = 20,
	limit = 10
}) => {
	const result = { dataList: [], pagination: {} }	
	try {
		const response = await axios.get(endpoints, {
			params: { page, take, limit }
		})
		const { PageNation: pagination, ...rest } = response.data
		const dataList = Object.values(rest)[0]	
		result.pagination = pagination
		result.dataList = dataList
	}
	catch {
		result.pagination = {}
		result.dataList = []
		throw new Error('데이터 패칭에 실패했습니다.')
	}
	finally {
		return result	
	}
}

export const fetchPostDetailById = async (postId) => {
	let result = {}
	try {
		const response = await axios.get(`/api/post/${postId}`)
		result = response.data
	} catch {
		result = {}
		throw new Error('데이터 패칭에 실패했습니다.')
	}
	finally {
		return result
	}
}

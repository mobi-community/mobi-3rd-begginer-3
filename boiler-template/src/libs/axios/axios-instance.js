import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "URL",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

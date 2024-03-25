import { axiosInstance } from "./axios-instance";

export const postListApi = async ({ params, limitTake }) => {
    const response = await axiosInstance("/posts", {
        params: {
            take: params.get("take") ?? limitTake,
        },
    });
    return response.data.Posts;
};

export const postDetailApi = async () => {
    const response = await axiosInstance("/post");
    return response.data;
};

export const commentsApi = async ({ params, limitTake }) => {
    const response = await axiosInstance("/comments", {
        params: {
            take: params.get("take") ?? limitTake,
        },
    });
    return response.data.Comments;
};

export const pageNationApi = async ({ params, limitTake, limitPage, url }) => {
    const response = await axiosInstance(url, {
        params: {
            page: params.get("page") ?? 1,
            take: params.get("take") ?? limitTake,
            limit: params.get("limit") ?? limitPage,
        },
    });
    return response.data;
};

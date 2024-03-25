import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { commentsApi, postDetailApi } from "../libs/axios/api";
import { useDispatch, useSelector } from "react-redux";
import { setLimitTake } from "../libs/redux/actions";
import PostDetailUi from "../features/post/postDetailUi";
import useAuthCheck from "../hooks/useAuthCheck";

const PostDetailPage = () => {
    const [params] = useSearchParams();
    const [postDetail, setPostDetail] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [isOpenCommentList, setIsOpenCommentList] = useState(false);

    useAuthCheck();

    // dispatch 함수를 사용
    const dispatch = useDispatch();

    // store에서 페이지네이션 설정을 가져옴
    const { limitTake } = useSelector((state) => state.pageNation);

    // 마운트될 때 페이지네이션 limit값 설정
    useEffect(() => {
        dispatch(setLimitTake(20));
    }, [dispatch]);

    // fetchPostDetail api 호출
    const fetchPostDetail = async () => {
        const fetchData = await postDetailApi();
        setPostDetail(fetchData);
    };

    // fetchComments api 호출
    const fetchComments = async () => {
        const fetchData = await commentsApi({
            params: params,
            limitTake: limitTake,
        });
        setCommentList(fetchData);
    };

    const onClickMoreComments = async () => {
        setIsOpenCommentList(true);
        fetchComments();
    };

    const onClickHiddenComments = () => {
        setIsOpenCommentList(false);
    };

    useEffect(() => {
        fetchPostDetail();
    }, []);

    useEffect(() => {
        if (!isOpenCommentList) return;
        fetchComments();
    }, [params]);

    return (
        <PostDetailUi
            postDetail={postDetail}
            isOpenCommentList={isOpenCommentList}
            onClickMoreComments={onClickMoreComments}
            onClickHiddenComments={onClickHiddenComments}
            commentList={commentList}
        />
    );
};
export default PostDetailPage;

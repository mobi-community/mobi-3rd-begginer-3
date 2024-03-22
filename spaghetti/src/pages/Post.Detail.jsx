import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { commentsApi, postDetailApi } from "../libs/axios/api";
import GenericPageNation from "../components/pagenation/pagenation.Generic";
import { useDispatch, useSelector } from "react-redux";
import { setLimitTake } from "../libs/redux/actions";

const PostDetailPage = () => {
    const [params] = useSearchParams();
    const [postDetail, setPostDetail] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [isOpenCommentList, setIsOpenCommentList] = useState(false);
    const dispatch = useDispatch();
    const { limitTake } = useSelector((state) => state.pageNation);

    useEffect(() => {
        dispatch(setLimitTake(20));
    }, [dispatch]);

    const fetchPostDetail = async () => {
        const fetchData = await postDetailApi();
        setPostDetail(fetchData);
    };

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
        const userName = localStorage.getItem("userName");
        if (!userName) {
            alert("로그인이 필요합니다");
            window.location.href = "/";
        }
        fetchPostDetail();
    }, []);

    useEffect(() => {
        if (!isOpenCommentList) return;
        fetchComments();
    }, [params]);

    return (
        <div>
            <h1>Post Detail Page</h1>
            <div>
                <p>제목: {postDetail.title}</p>
                <p>내용: {postDetail.content}</p>
                {!isOpenCommentList && (
                    <button onClick={onClickMoreComments}>댓글 보기</button>
                )}
                {isOpenCommentList && (
                    <button onClick={onClickHiddenComments}>댓글 숨기기</button>
                )}
                {isOpenCommentList && (
                    <>
                        {commentList.map((comment) => (
                            <div key={comment.id}>
                                <p>{comment.content}</p>
                                <p>{comment.User.nickName}</p>
                            </div>
                        ))}
                        <GenericPageNation apiUrl={"/comments"} />
                    </>
                )}
            </div>
        </div>
    );
};
export default PostDetailPage;

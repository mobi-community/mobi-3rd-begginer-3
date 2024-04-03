import { useEffect, useState } from "react";
import { DialLogState, useDiaLogStore } from "../contexts/DialogProvider";
import { useSearchParams } from "react-router-dom";
import { postListApi } from "../libs/axios/api";
import { useDispatch, useSelector } from "react-redux";
import { setLimitTake } from "../libs/redux/actions";
import PostListUi from "../features/post/postListUi";
import useAuthCheck from "../hooks/useAuthCheck";

// LIMIT_TAKE = 10
// LIMIT_PAGE = 20
const PostListPage = () => {
    const [params] = useSearchParams();
    const [postList, setPostList] = useState([]);
    const [, setDiaLogAttribute] = useDiaLogStore();
    // dispatch 함수를 사용
    const dispatch = useDispatch();
    // store에서 페이지네이션 설정을 가져옴
    const { limitTake } = useSelector((state) => state.pageNation);

    // 사용자 인증 훅 실행
    useAuthCheck();

    // 마운트될 때 페이지네이션의 limit값들을 설정.
    useEffect(() => {
        dispatch(setLimitTake(10));
    }, [dispatch]);

    useEffect(() => {
        const fetchPostList = async () => {
            const fetchData = await postListApi({
                params: params,
                limitTake: limitTake,
            });
            setPostList(fetchData);
        };
        fetchPostList();
    }, [params]);

    const onClickPost = async (postId) => {
        await setDiaLogAttribute({
            type: DialLogState.CONFIRM,
            text: "정말로 페이지를 이동하겠습니까",
            isOpen: true,
            onConfirm: async () => {
                await setDiaLogAttribute({
                    text: "정말로 이동해버린다요!",
                    onConfirm: async () => {
                        window.location.href = `/post-detail/${postId}`;
                    },
                });
            },
            onCancel: () => {
                setDiaLogAttribute({ isOpen: false });
            },
        });
    };

    return <PostListUi postList={postList} onClickPost={onClickPost} />;
};
export default PostListPage;

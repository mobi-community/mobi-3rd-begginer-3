import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import CommentPageNation from "../components/pagenation/Pagenation.Comment";

const LIMIT_TAKE = 20;

const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [postDetail, setPostDetail] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  // const { getPaginationParam ,registerPaginationParams } = usePagination();

  const fetchPostDetail = async () => {
    const response = await axios.get("/api/post");
    setPostDetail(response.data);
  };

  useEffect(() => {
    fetchPostDetail()
  }, [])
  console.log(postDetail)

  const fetchComments = async () => {
    const response = await axios.get("/api/comments", {
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    });
    console.log(response.data);
    setCommentList(response.data.Comments);
  };

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true);
    fetchComments();
  };

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false);
  };

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
            <CommentPageNation />
            <Pagination/>
          </>
        )}
      </div>
    </div>
  );
};
export default PostDetailPage;

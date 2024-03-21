import { useLoaderData } from "react-router-dom";
import Pagination from '../components/Pagination';
import { FETCH_POINT_DATA_LIST } from "../constants";
import { useFetchDataListAndPagination } from "../hooks";

const PostDetailPage = () => {
  const { postDetail } = useLoaderData()
  const { dataList: commentList } = useFetchDataListAndPagination(
    {
      endpoints: FETCH_POINT_DATA_LIST.COMMENT,
      take: 20,
      limit: 20,
    }
  )

  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {postDetail.title}</p>
        <p>내용: {postDetail.content}</p>
        {!isOpenCommentList && (
          <button onClick={()=>{}}>댓글 보기</button>
        )}
        {isOpenCommentList && (
          <button onClick={()=>{}}>댓글 숨기기</button>
        )}
        {isOpenCommentList && (
          <>
            {commentList.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>{comment.User.nickName}</p>
              </div>
            ))}
            <Pagination/>
          </>
        )}
      </div>
    </div>
  );
};
export default PostDetailPage;

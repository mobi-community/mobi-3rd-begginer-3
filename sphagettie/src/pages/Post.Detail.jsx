import { useEffect} from "react"
import { useFetchComment, useFetchDetail} from "../hooks"
import PageNation from "../components/PageNation"
import { checkUserAuth } from "../utils"

const PostDetailPage = () => {
  const { postDetail } = useFetchDetail()
  const {
    commentList,
    onClickMoreComments,
    onClickHiddenComments,
    isOpenCommentList,
  } = useFetchComment()

  useEffect(() => {
    checkUserAuth()
  }, [])

  if (!postDetail) return
  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {postDetail.title}</p>
        <p>내용: {postDetail.content}</p>
        {!isOpenCommentList ? (
          <button onClick={onClickMoreComments}>댓글 보기</button>
        ) : (
          <>
            <button onClick={onClickHiddenComments}>댓글 숨기기</button>
            {commentList?.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>{comment.User.nickName}</p>
              </div>
            ))}
            <PageNation path="comments" />
          </>
        )}
      </div>
    </div>
  )
}
export default PostDetailPage

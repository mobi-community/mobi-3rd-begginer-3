import GenericPageNation from "../../components/pagenation/pagenation.Generic";

const PostDetailUi = ({
    postDetail,
    isOpenCommentList,
    onClickMoreComments,
    onClickHiddenComments,
    commentList,
}) => (
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
export default PostDetailUi;

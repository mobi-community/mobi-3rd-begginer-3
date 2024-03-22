import GenericPageNation from "../../components/pagenation/pagenation.Generic";

const PostListUi = ({ postList, onClickPost }) => (
    <table>
        <caption>Post List Page</caption>
        <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
        </tr>
        {postList.map((post) => (
            <tr key={post.id} onClick={() => onClickPost(post.id)}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.User.nickName}</td>
            </tr>
        ))}
        <GenericPageNation apiUrl={"/posts"} />
    </table>
);
export default PostListUi;

import { useEffect, useState } from "react";
import Pagination from '../components/Pagination';
import { FETCH_POINT_DATA_LIST, PARAM_CURRENT_PAGE } from "../constants";
import { useDialogStore } from "../contexts/DialogProvider";
import { usePagination } from "../hooks/usePagination";
import { fetchDataListAndPagination } from "../utils";

const PostListPage = () => {
  const [postList, setPostList] = useState([]);
  const { getPaginationParam, registerPaginationParams } = usePagination()
  
  const currentPage = getPaginationParam(PARAM_CURRENT_PAGE, 1)
  
  const asyncFetching = async () => {
    const {PageNation, Posts} = await fetchDataListAndPagination({
      endpoints: FETCH_POINT_DATA_LIST.POST,
      page: currentPage,
      take: 20,
      limit: 10,
    })
    registerPaginationParams(
      {
        ...PageNation
      }
    )
    setPostList([...Posts])
  }
  useEffect(() => {
    asyncFetching()
  },[currentPage])
  

  const [, setDialogAttribute] = useDialogStore();

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  const onClickPost = async (postId) => {
    await setDialogAttribute({
      type: DIALOG_STATE.CONFIRM,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDialogAttribute({
          text: "정말로 이동해버린다요!",
          onConfirm: async () => {
            window.location.href = `/post-detail/${postId}`;
          },
        });
      },
      onCancel: () => {
        setDialogAttribute({ isOpen: false });
      },
    });
  };

  return (
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
      <Pagination></Pagination>
    </table>
  );
};
export default PostListPage;


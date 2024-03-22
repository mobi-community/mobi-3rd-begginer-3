import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { FETCH_POINT_DATA_LIST } from '../constants'
import { useDialogStore } from '../contexts/DialogProvider'
import { useDialog, useFetchDataListAndPagination } from '../hooks'

const PostListPage = () => {
	const navigate = useNavigate()
	const { onCloseDialog } = useDialogStore()
	const { dataList: postList } = useFetchDataListAndPagination({
		endpoints: FETCH_POINT_DATA_LIST.POST,
		take: 20,
		limit: 10
	})
	const { onOpenConfirm } = useDialog()

	const onClickPost = async (postId) => {
		onOpenConfirm('정말로 페이지를 이동하겠습니까', () => {
			onOpenConfirm('정말로 이동해버린다요!', () => {
				navigate(`/post-detail/${postId}`), onCloseDialog()
			})
		})
	}

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
			<Pagination />
		</table>
	)
}
export default PostListPage

import { useLoaderData, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDialog } from '../hooks'
import { useAuthorization } from '../hooks/use.authorization'

const HomePage = () => {
	const { weather } = useLoaderData()
	const { isAuthorized, authorize } = useAuthorization()
	const navigate = useNavigate()
	const { onOpenAlert } = useDialog()

	const onSubmit = (e) => {
		e.preventDefault()
		const userName = e.target.userName.value.trim()
		if (!userName) {
			onOpenAlert('이름을 입력해주세요.')
			return
		}
		authorize(userName)
		e.target.userName.value = ''
	}

	const onPressNavigateBlog = () => {
		onOpenAlert('정말로 페이지를 이동하시겠습니까', () => {
			navigate('/posts')
		})
	}

	return (
		<>
			{!isAuthorized && (
				<S.BlurBackGround>
					<S.UserNameForm onSubmit={onSubmit}>
						<input type="text" name="userName" placeholder="Enter your name" />
						<button type="submit">Submit</button>
					</S.UserNameForm>
				</S.BlurBackGround>
			)}
			<div>
				<h1>Home Page</h1>
				<p>오늘의 기온</p>
				<p>{weather?.find((el) => el.category === 'T1H')?.obsrValue}도</p>
				<S.Button onClick={onPressNavigateBlog}>블로그 보러가기</S.Button>
			</div>
		</>
	)
}
export default HomePage

const BlurBackGround = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 9999;
	backdrop-filter: blur(10px);
`

const UserNameForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const Button = styled.button``

const S = {
	BlurBackGround,
	UserNameForm,
	Button
}

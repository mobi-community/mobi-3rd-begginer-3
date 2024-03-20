import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const App = () => {
	const navi = useNavigate()
	useEffect(() => {
		navi('/id-pw')
	}, [])
	return <></>
}

export default App

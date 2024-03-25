import {Outlet} from 'react-router-dom'

const Center = () => {
	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<Outlet />
		</div>
	)
}

export default Center

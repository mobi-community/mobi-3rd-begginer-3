import App from '@/App.tsx'
import '@/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Center from './components/layout/center'
import {CMT, ID_PW, PH_BDAY} from './pages'

const router = createBrowserRouter([
	{
		path: '',
		element: <Center />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/id-pw',
				element: <ID_PW />,
			},
			{
				path: '/ph-bday',
				element: <PH_BDAY />,
			},
			{
				path: '/cmt',
				element: <CMT />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

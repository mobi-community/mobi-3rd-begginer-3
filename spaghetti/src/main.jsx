import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { worker } from './__mock__/browser'
import './app.css'
import { DialogProvider } from './contexts'
import router from './router'

worker.start()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DialogProvider>
			<RouterProvider router={router} />
		</DialogProvider>
	</React.StrictMode>
)

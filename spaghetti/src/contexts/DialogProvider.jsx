import { createContext, useContext, useRef, useState } from 'react'
import Dialog from '../components/Dialog'
import { DIALOG_STATE } from '../constants'

const DialogContext = createContext()

export const useDialogStore = () => useContext(DialogContext)

export const DialogProvider = ({ children }) => {
	
	const dialogRef = useRef()

	const [dialogAttribute, setDialogAttribute] = useState({
		type: DIALOG_STATE.ALERT,
		text: '',
		isOpen: false,
		onConfirm: () => {},
		onCancel: () => {},
		position: {
			x: 50,
			y: 10
		}
	})

	const onOpenDialog = (args) => {
		dialogRef.current.showModal()
		setDialogAttribute((prev) => ({
			...prev,
			...args,
			isOpen: true
		}))
	}

  const onCloseDialog = () => {
    dialogRef.current.close()
		setDialogAttribute((prev) => ({
			...prev,
			isOpen: false
		}))
	}

	return (
    <DialogContext.Provider value={{ dialogAttribute, onOpenDialog, onCloseDialog }}>
			{children}
			<Dialog {...{ ...dialogAttribute }} ref={dialogRef} onClose={onCloseDialog} />
		</DialogContext.Provider>
	)
}

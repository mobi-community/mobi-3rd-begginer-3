import { createContext, useContext, useRef, useState } from 'react'
import Dialog from '../components/Dialog'
import { DIALOG_STATE } from '../constants'

const DialogContext = createContext()

export const useDialogStore = () => useContext(DialogContext)

export const DialogProvider = ({ children }) => {
	const DialogRef = useRef()
	const [DialogAttribute, setDialogAttribute] = useState({
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
		DialogRef.current.showModal()
		setDialogAttribute((prev) => ({
			...prev,
			...args,
			isOpen: true
		}))
	}

	const onCloseDialog = () => {
		// 이미 닫힌 상태라면 이후의 로직을 수행하지 않습니다.
		if (!DialogAttribute.isOpen) return
		DialogRef.current.close()
		setDialogAttribute((prev) => ({
			...prev,
			isOpen: false
		}))
	}

	return (
		<DialogContext.Provider value={[DialogAttribute, onOpenDialog]}>
			{children}
			<Dialog {...{ ...DialogAttribute }} ref={DialogRef} onClose={onCloseDialog} />
		</DialogContext.Provider>
	)
}

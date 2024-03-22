import { DIALOG_STATE } from '../constants'
import { useDialogStore } from '../contexts/DialogProvider'
export const useDialog = () => {
	const { onOpenDialog, onCloseDialog } = useDialogStore()

	/**
	 * @description alert 조작 간편화
	 * @param {string} dialogText dialog 에 적힐 문구
	 * @param {VoidFunction} confirmCallback 확인 버튼 클릭 시, 실행로직
	 */
	const onOpenAlert = (dialogText, confirmCallback = () => {}) => {
		onOpenDialog({
			type: DIALOG_STATE.ALERT,
			text: dialogText,
			onConfirm: () => {
				confirmCallback()
				onCloseDialog()
			}
		})
	}

	/**
	 * @description confirm 조작 간편화
	 * @param {string} modalText confirm 에 적힐 문구
	 * @param {VoidFunction} confirmCallback 확인 버튼 클릭 시, 실행로직
	 * @param {VoidFunction} cancelCallback 취소 버튼 클릭 시, 실행로직
	 */
	const onOpenConfirm = (modalText, confirmCallback = () => {}, cancelCallback = () => {}) => {
		onOpenDialog({
			type: DIALOG_STATE.CONFIRM,
			text: modalText,
			onConfirm: confirmCallback,
			onCancel: () => {
				cancelCallback()
				onCloseDialog()
			}
		})
	}

	return { onOpenAlert, onOpenConfirm }
}

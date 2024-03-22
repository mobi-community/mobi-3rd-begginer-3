import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DIALOG_STATE, LOCAL_KEY_AUTH } from "../constants";
import { useDialogStore } from "../contexts/DialogProvider";

const AuthRoute = () => {
  const { onOpenDialog, onCloseDialog } = useDialogStore();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem(LOCAL_KEY_AUTH);
    if (!auth) {
      onOpenDialog({
        type: DIALOG_STATE.ALERT,  
        text: "로그인이 필요합니다.",
        onConfirm: () => {
          navigate('/home');
          onCloseDialog();
        }
      })
    }
  },[])
  return <Outlet/>
}
export default AuthRoute
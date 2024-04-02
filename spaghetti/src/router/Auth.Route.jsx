import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LOCAL_KEY_AUTH } from "../constants";
import { useDialog } from "../hooks";

const AuthRoute = () => {
  const { onOpenAlert } = useDialog();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem(LOCAL_KEY_AUTH);
    if (!auth) {
      onOpenAlert( '로그인이 필요합니다.',
        () => { navigate('/') }
      )
    }
  },[])
  return <Outlet/>
}
export default AuthRoute
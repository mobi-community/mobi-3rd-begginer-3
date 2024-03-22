import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LOCAL_KEY_AUTH } from "../constants";

const AuthRoute = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem(LOCAL_KEY_AUTH);
    if (!auth) {
      alert("로그인이 필요합니다");
      navigate('/');
    }
  },[])
  return <Outlet/>
}
export default AuthRoute
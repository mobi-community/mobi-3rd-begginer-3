import { useEffect } from "react";

const useAuthCheck = () => {
    useEffect(() => {
        const userName = localStorage.getItem("userName");
        if (!userName) {
            alert("로그인이 필요합니다");
            window.location.href = "/";
        }
    }, []);
};
export default useAuthCheck;

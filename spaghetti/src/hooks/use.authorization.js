import { useEffect, useState } from "react"
import { LOCAL_KEY_AUTH } from "../constants"

export const useAuthorization = () => {
  const [isAuthorized, setIsAuthorized] = useState(true)
  const authorize = ( userName ) => {
    localStorage.setItem(LOCAL_KEY_AUTH, userName)
    setIsAuthorized(true)
  }
  useEffect(() => {
    const auth = localStorage.getItem(LOCAL_KEY_AUTH)
    console.log(auth)
    if (!auth) setIsAuthorized(false)
  },[])

  return { isAuthorized, authorize }
}
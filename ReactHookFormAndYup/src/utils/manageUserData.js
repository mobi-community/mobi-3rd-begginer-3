import { REGISTER_KEY } from "../const/key"

export const manageUserData = (history, data) => {
  const newHistory = { ...history, ...data }
  sessionStorage.setItem(REGISTER_KEY.sessionKey, JSON.stringify(newHistory))
}

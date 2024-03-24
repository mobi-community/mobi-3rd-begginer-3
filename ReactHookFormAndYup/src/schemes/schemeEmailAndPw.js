import * as yup from "yup"
import { ERRORS } from "../const"

const schemeEmailAndPw = yup.object().shape({
  email: yup
    .string()
    .email(ERRORS.message.email)
    .required(ERRORS.message.emailRequired),
  password: yup
    .string()
    .matches(ERRORS.pattern.password, ERRORS.message.password)
    .required(ERRORS.message.passwordRequired),
})

export default schemeEmailAndPw

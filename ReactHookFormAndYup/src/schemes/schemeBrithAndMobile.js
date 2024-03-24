import * as yup from "yup"
import { ERRORS } from "../const"

const schemeBirthAndMobile = yup.object().shape({
  mobile: yup
    .string()
    .matches(ERRORS.pattern.mobile, ERRORS.message.mobile)
    .required(ERRORS.message.mobileRequired),
  birth: yup
    .string()
    .matches(ERRORS.pattern.birth, ERRORS.message.birthRequired),
})

export default schemeBirthAndMobile

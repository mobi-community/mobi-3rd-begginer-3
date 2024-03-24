import * as yup from "yup"
import { ERRORS } from "../const"

const schemeComment = yup.object().shape({
  comment: yup
    .string()
    .min(100, ERRORS.message.commentMin)
    .max(300, ERRORS.message.commentMax)
    .required(ERRORS.message.commentRequired),
})

export default schemeComment

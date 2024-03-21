import * as yup from "yup";

export const step3Schema = yup.object().shape({
  message: yup
    .string()
    .min(100, "하고싶은 말은 100자 이상 입력해주세요.")
    .max(300, "하고싶은 말은 300자 이내로 입력해주세요.")
    .required("하고싶은 말을 입력해주세요."),
});

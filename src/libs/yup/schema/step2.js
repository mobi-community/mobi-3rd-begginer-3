import * as yup from "yup";

export const step2Schema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^010-\d{4}-\d{4}$/,
      "전화번호 형식이 올바르지 않습니다. (예: 010-0000-0000)"
    )
    .required("전화번호를 입력해주세요"),
  birth: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "생년월일 형식이 올바르지 않습니다. (예: YYYY-MM-DD)"
    )
    .required("생년월일을 입력해주세요"),
});

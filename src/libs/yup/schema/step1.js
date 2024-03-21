import * as yup from "yup";

export const step1Schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 양식이 올바르지 않습니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "8글자 이상 입력해주세요")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "비밀번호는 8글자 이상 대소문자,특수문자를 1자 이상 포함하여야 합니다."
    )
    .required("비밀번호를 입력해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다") // 입력값이 주어진 배열의 값 중 하나와 일치해야한다는 것 검증
    .required("비밀번호 확인을 입력해주세요"),
});

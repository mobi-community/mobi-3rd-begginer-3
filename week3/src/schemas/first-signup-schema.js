import * as Yup from "yup";

export const firstSignupSchema = Yup.object().shape({
    email: Yup.string()
        .required("이메일을 입력해주세요")
        .email("유효한 이메일 주소를 입력해주세요")
        .matches(/^.+@.+\..+$/, "유효한 이메일 주소를 입력해주세요"),
    password: Yup.string()
        .required("비밀번호를 입력해주세요")
        .min(8, "비밀번호는 최소 8자 이상이여야 합니다."),
});

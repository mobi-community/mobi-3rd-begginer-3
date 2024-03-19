import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    email: Yup.string()
        .required("이메일을 입력해주세요")
        .email("유효한 이메일 주소를 입력해주세요")
        .matches(/^.+@.+\..+$/, "유효한 이메일 주소를 입력해주세요"),
    password: Yup.string()
        .required("비밀번호를 입력해주세요")
        .min(8, "비밀번호는 최소 8자 이상이여야 합니다."),
    // password_confirm: Yup.string()
    //     .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    //     .required("비밀번호 확인은 필수입니다."),
    phone: Yup.string()
        .required("연락처를 입력해주세요. (010-0000-0000)")
        .matches(/^010-\d{4}-\d{4}$/, "유효한 전화번호를 입력해주세요."),
    birthday: Yup.string()
        .required("생년월일을 입력해주세요")
        .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            "생년월일은 YYYY-MM-DD 형식이여야 합니다."
        )
        .test(
            "is-date",
            "유효한 날짜를 입력해주세요.",
            (value) => !isNaN(Date.parse(value))
        ),
    wanttosay: Yup.string()
        .required("내용을 입력해주세요")
        .min(100, "최소 100자를 입력해주세요"),
});

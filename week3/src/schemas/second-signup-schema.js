import * as Yup from "yup";

export const secondSignupSchema = Yup.object().shape({
    phone: Yup.string()
        .required("연락처를 입력해주세요. (010-0000-0000)")
        .matches(/^010-\d{4}-\d{4}$/, "유효한 전화번호를 입력해주세요."),
    birthday: Yup.string()
        .required("생년월일을 입력해주세요")
        .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            "생년월일은 YYYY-MM-DD 형식이여야 합니다."
        )
        .test("is-date", "유효한 날짜를 입력해주세요.", (value) => {
            if (!value) return false;
            const [year, month, day] = value.split("-").map(Number);
            const date = new Date(year, month - 1, day);
            return (
                date.getFullYear() === year &&
                date.getMonth() === month - 1 &&
                date.getDate() === day
            );
        }),
});

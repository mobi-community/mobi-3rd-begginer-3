import * as yup from "yup";

const schema = yup.object({
    email: yup
        .string()
        .email("이메일 양식이 올바르지 않습니다")
        .required("ID를 입력해주세요"),
    password: yup
        .string()
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
            "대소문자, 숫자, 특수문자를 하나 이상 포함해 주세요"
        )
        .min(8, "8글자 이상 입력해주세요")
        .required("비밀번호를 입력해주세요"),
    phone: yup
        .string()
        .matches(
            /^01([0|1])-([0-9]{4})-([0-9]{4})$/,
            "010-0000-0000 형식으로 작성해주세요"
        ),
    birthday: yup
        .string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 형식으로 작성해주세요")
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
    freetext: yup
        .string()
        .min(100, "100자 이상 적어주세요")
        .max(300, "300자 이하 적어주세요"),
});

export default schema;

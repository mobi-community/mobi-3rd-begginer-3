import * as Yup from "yup";

export const thirdSignupSchema = Yup.object().shape({
    wanttosay: Yup.string()
        .required("내용을 입력해주세요")
        .min(100, "최소 100자를 입력해주세요"),
});

import { parseISO, isValid } from "date-fns";

export const ValudateBirthday = (value) => {
    const date = parseISO(value); // YYYY-MM-DD 형식의 문자열을 Date 객체로 변환
    return isValid(date)
        ? true
        : "유효한 날짜를 입력해주세요. (YYYY-MM-DD 형식)";
};

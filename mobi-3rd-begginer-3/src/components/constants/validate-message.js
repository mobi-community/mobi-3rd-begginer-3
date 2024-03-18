const ID = {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    message: "이메일 형식이 아닙니다.",
};

const PASSWORD = {
    value: /^(?=.*[A-Za-z])(?=.*[!@#$%^&*()-_=+{}\[\]|;:'",.<>?])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()-_=+{}\[\]|;:'",.<>?]{8,}$/,
    message: "비밀번호는 8글자 이상 대소문자특수문자를 1자 이상 포함해주세요.",
};
const PHONE_NUMBER = {
    value: /^\d{3}-\d{4}-\d{4}$/,
    message: "(-)를 포함해서 번호를 입력해주세요.",
};
const BIRTH = {
    value: /^\d{4}-\d{2}-\d{2}$/,
    message: "형식이 다릅니다.",
};
const COMMENT = {
    value: /^.{100,300}$/,
    message: "100자 이상 300자 이내로 작성해주세요.",
};
export const VALIDATION = {
    ID,
    PASSWORD,
    PHONE_NUMBER,
    BIRTH,
    COMMENT,
};

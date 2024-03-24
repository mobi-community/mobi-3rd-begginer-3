export const ERRORS = {
  message: {
    email: "이메일 형식이 아닙니다.",
    emailRequired: "이메일을 입력해주세요",
    password: "비밀번호 형식이 틀렸습니다.",
    passwordRequired: "비밀번호를 입력해주세요",
    mobile: "올바른 핸드폰 번호를 입력해주세요",
    mobileRequired: "핸드폰 번호를 입력해주세요",
    birth: "올바른 생년월일을 입력해주세요 (YYYY-MM-DD 형식)",
    birthRequired: "생년월일을 입력해주세요",
    commentMin: "메시지는 최소 100자 이상이어야 합니다.",
    commentMax: "메시지는 최대 300자까지 입력할 수 있습니다.",
    commentRequired: "메시지를 입력하세요.",
  },
  pattern: {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
    mobile: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
    birth: /^\b(?:19|20)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])\b$/,
  },
}

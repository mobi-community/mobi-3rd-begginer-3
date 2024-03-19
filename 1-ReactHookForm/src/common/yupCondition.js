import * as yup from 'yup';

export const EmailYup = yup.string().email('이메일 양식이 올바르지 않습니다').required('이메일을 입력해주세요');

export const PassWordYup = yup
  .string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).*$/,
    '대소문자,숫자,특수문자를 하나이상 포함해 주세요'
  )
  .min(8, '8글자 이상 입력해주세요')
  .required('비밀번호를 입력해주세요');

export const PhoneYup = yup.string().matches(/^01([0|1])-([0-9]{4})-([0-9]{4})$/, '010-0000-0000형식을 지켜주세요');

export const BirthdayYup = yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM-DD 형식을 지켜주세요');

export const AboutYup = yup
  .string()
  .min(100, '100자 이상 적어주세요')
  .max(300, '300자 이하 적어주세요')
  .test('no-spaces', 'About Me cannot contain spaces', (value) => {
    const lengthWithoutSpaces = value.replace(/\s/g, '').length;
    return lengthWithoutSpaces === value.length;
  }) // 띄어쓰기를 제외한 길이 체크
  .matches(/^[a-zA-Z0-9가-힣.,?!]*$/, '특수문자는 빼주세요(,.?!제외)');

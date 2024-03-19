import { Button, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { theme } from "../tokens/theme";

const SignUp = () => {
  // form의 유효성 검사를 위햐 yup의 schema 설정
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("이메일 양식이 올바르지 않습니다")
      .required("이메일을 입력해주세요"),
    password: yup
      .string()
      .min(8, "8글자 이상 입력해주세요")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
        "비밀번호는 8글자 이상 대소문자특수문자를 1자 이상 포함하여야 합니다."
      )
      .required("비밀번호를 입력해주세요"),
    confirmPassword: yup.string(),
    phone: yup
      .string()
      .matches(
        /^010-\d{4}-\d{4}$/,
        "전화번호 형식이 올바르지 않습니다. (예: 010-0000-0000)"
      )
      .required("전화번호를 입력해주세요"),
    birth: yup
      .string()
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "생년월일 형식이 올바르지 않습니다. (예: YYYY-MM-DD)"
      )
      .required("생년월일을 입력해주세요"),
    message: yup
      .string()
      .min(100, "하고싶은 말은 100자 이상 입력해주세요.")
      .max(300, "하고싶은 말은 300자 이내로 입력해주세요.")
      .required("하고싶은 말을 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입</h1>
        <S.InputGroup>
          <S.InputTitle>이메일</S.InputTitle>
          <TextField
            {...register("email")}
            name="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            type="email"
            size="small"
            sx={{ width: "300px" }}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputTitle>비밀번호</S.InputTitle>
          <TextField
            {...register("password")}
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            size="small"
            sx={{ width: "300px" }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputTitle>비밀번호 확인</S.InputTitle>
          <TextField
            {...register("confirmPassword")}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            size="small"
            sx={{ width: "300px" }}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputTitle>핸드폰 번호</S.InputTitle>
          <TextField
            {...register("phone")}
            name="phone"
            id="phone"
            placeholder="010-0000-0000"
            size="small"
            sx={{ width: "300px" }}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputTitle>생년월일</S.InputTitle>
          <TextField
            {...register("birth")}
            name="birth"
            id="birth"
            placeholder="YYYY-MM-DD"
            size="small"
            sx={{ width: "300px" }}
          />
          {errors.birth && <p>{errors.birth.message}</p>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputTitle>하고싶은 말</S.InputTitle>
          <TextField
            {...register("message")}
            name="message"
            id="message"
            placeholder="하고싶은 말"
            multiline
            sx={{ width: "300px" }}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </S.InputGroup>

        <Button variant="contained" type="submit" sx={{ marginTop: "20px" }}>
          회원가입
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

const InputTitle = styled.span`
  width: 150px;
  text-align: center;
  font-weight: bold;
`;

const S = {
  Wrapper,
  Form,
  InputGroup,
  InputTitle,
};

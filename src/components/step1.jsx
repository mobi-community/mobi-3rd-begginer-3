// Step1 컴포넌트
import { TextField, Button } from "@mui/material"; // Button import 추가
import {
  InputGroup,
  InputTitle,
  ErrorText,
} from "../libs/styled-components/displayStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Step1 = ({ updateForm }) => {
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
        "비밀번호는 8글자 이상 대소문자,특수문자를 1자 이상 포함하여야 합니다."
      )
      .required("비밀번호를 입력해주세요"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
      .required("비밀번호 확인을 입력해주세요"),
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
    updateForm(data);
    console.log(data);
  };

  return (
    <>
      <InputGroup>
        <InputTitle>이메일</InputTitle>
        <TextField
          {...register("email")}
          name="email"
          id="email"
          placeholder="이메일을 입력해주세요"
          type="email"
          size="small"
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      <InputGroup>
        <InputTitle>비밀번호</InputTitle>
        <TextField
          {...register("password")}
          name="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          size="small"
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

      <InputGroup>
        <InputTitle>비밀번호 확인</InputTitle>
        <TextField
          {...register("passwordConfirm")}
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          size="small"
          sx={{ width: "300px" }}
        />
      </InputGroup>
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm.message}</ErrorText>
      )}
      <Button onClick={handleSubmit(onSubmit)}>Next</Button>
    </>
  );
};

export default Step1;

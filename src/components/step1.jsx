// Step1 컴포넌트
import { TextField, Button } from "@mui/material"; // Button import 추가
import {
  InputGroup,
  InputTitle,
  ErrorText,
  Form,
} from "../libs/styled-components/displayStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { step1Schema } from "../libs/yup/schema/step1";

const Step1 = ({ updateForm, next }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(step1Schema),
  });

  const onClickNext = (data) => {
    updateForm(data);
    next();
    console.log(data);
  };

  return (
    <Form>
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
      <Button
        type="button"
        variant="outlined"
        onClick={handleSubmit(onClickNext)}
        disabled={!isValid}
      >
        Next
      </Button>
    </Form>
  );
};

export default Step1;

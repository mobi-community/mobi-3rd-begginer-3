import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

const Step2 = ({ updateForm }) => {
  // form의 유효성 검사를 위햐 yup의 schema 설정
  const schema = yup.object().shape({
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
    updateForm(data);
    console.log(data);
  };

  return (
    <>
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
      </S.InputGroup>
      {errors.phone && <S.ErrorText>{errors.phone.message}</S.ErrorText>}

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
      </S.InputGroup>
      {errors.birth && <S.ErrorText>{errors.birth.message}</S.ErrorText>}
      <Button onClick={handleSubmit(onSubmit)}>Next</Button>
    </>
  );
};
export default Step2;

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

const ErrorText = styled.div`
  text-align: end;
  margin-left: 150px;
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

const S = {
  InputGroup,
  InputTitle,
  ErrorText,
};

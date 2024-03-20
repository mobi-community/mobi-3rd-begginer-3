import { useForm } from "react-hook-form";
import useMultiStepForm from "../utils/useMultiStepForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Step1 from "../components/step1";
import styled from "styled-components";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const MultiStepSignUp = () => {
  const INITIAL_FORMDATA = {
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    birth: "",
    message: "",
  };

  const [formData, setFormData] = useState(INITIAL_FORMDATA); // 폼데이터 상태 관리
  const [formIsValid, setFormIsValid] = useState(false); // form의 전체 유효성 상태 (모든 필드가 유효한지 여부)

  const updateForm = (form) => {
    setFormData((prev) => ({ ...prev, ...form }));
  };

  // form의 유효성 검사를 위한 yup의 schema 설정
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
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // watch 함수를 사용하여 폼 필드의 변경을 감지하여 isValid 값 업데이트
  const watchedForm = watch([
    "email",
    "password",
    "passwordConfirm",
    "phone",
    "birth",
    "message",
  ]);

  // 폼 필드가 변경될 때마다 isValid 값 업데이트
  useEffect(() => {
    // watchedFields에 대한 유효성 검사를 다시 수행하고 isValid 상태 업데이트
    const validateForm = async () => {
      const isValid = await schema.isValid(watchedForm);
      setFormIsValid(isValid); // 전체 폼의 유효성 상태를 저장
    };

    validateForm();
  }, [watchedForm, schema]);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    if (formIsValid && !isLastStep()) {
      // formIsValid로 변경
      next();
    } else if (formIsValid && isLastStep()) {
      // formIsValid로 변경
      // TODO: 회원가입을 완료하는 로직 추가
      console.log("회원가입이 완료되었습니다!");
    }
  };

  const stepProps = {
    schema,
    register,
    handleSubmit,
    onSubmit,
    errors,
  };

  const { currentTitle, currentStep, prev, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      {
        title: "ID & PASSWORD",
        element: (
          <Step1 {...formData} updateForm={updateForm} stepProps={stepProps} />
        ),
      },
      {
        title: "Phone & Birth",
        element: (
          <Step2 {...formData} updateForm={updateForm} stepProps={stepProps} />
        ),
      },
      {
        title: "하고싶은 말",
        element: (
          <Step3 {...formData} updateForm={updateForm} stepProps={stepProps} />
        ),
      },
    ]);

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
          {!isFirstStep && (
            <Button variant="outlined" onClick={prev}>
              Prev
            </Button>
          )}
          <S.StepTitle>{currentTitle}</S.StepTitle>
          <Button
            type="submit"
            variant="outlined"
            onClick={next}
            //disabled={!formIsValid} // formIsValid로 변경
          >
            {isLastStep ? "회원가입" : "Next"}
          </Button>
        </S.Header>
        {currentStep}
      </S.Form>
    </>
  );
};
export default MultiStepSignUp;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  margin: 20px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StepTitle = styled.span`
  margin: 20px 100px;
  font-size: 18px;
  font-weight: 700;
`;

const S = {
  Wrapper,
  Header,
  Form,
  StepTitle,
};

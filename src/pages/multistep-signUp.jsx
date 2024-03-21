import useMultiStepForm from "../utils/useMultiStepForm";
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
  const [nextStep, setNextStep] = useState(null);

  const updateForm = (form) => {
    setFormData((prev) => ({ ...prev, ...form }));
  };

  useEffect(() => {
    if (nextStep) {
      nextStep();
    }
  }, [nextStep]);

  const { currentTitle, currentStep, prev, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      {
        title: "ID & PASSWORD",
        element: (
          <Step1
            {...formData}
            updateForm={updateForm}
            next={() => setNextStep(next)}
          />
        ),
      },
      {
        title: "Phone & Birth",
        element: (
          <Step2
            {...formData}
            updateForm={updateForm}
            next={() => setNextStep(next)}
          />
        ),
      },
      {
        title: "하고싶은 말",
        element: (
          <Step3
            {...formData}
            updateForm={updateForm}
            next={() => setNextStep(next)}
          />
        ),
      },
    ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted data:", formData);
  };

  return (
    <>
      <S.Form onSubmit={formSubmitHandler}>
        <S.Header>
          {!isFirstStep && (
            <Button variant="outlined" onClick={prev}>
              Prev
            </Button>
          )}
          <S.StepTitle>{currentTitle}</S.StepTitle>
          <Button type="button" variant="outlined" onClick={next}>
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

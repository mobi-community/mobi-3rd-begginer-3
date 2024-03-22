import useMultiStepForm from "../utils/useMultiStepForm";
import Step1 from "../components/step1";
import styled from "styled-components";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
export const INITIAL_FORMDATA = {
  email: "",
  password: "",
  passwordConfirm: "",
  phone: "",
  birth: "",
  message: "",
};
const MultiStepSignUp = () => {
  const [formData, setFormData] = useState(INITIAL_FORMDATA); // 폼데이터 상태 관리
  const [nextStep, setNextStep] = useState(null);
  const [prevStep, setPrevStep] = useState(null);

  const updateForm = (form) => {
    setFormData((prev) => ({ ...prev, ...form }));
  };

  useEffect(() => {
    if (nextStep) {
      nextStep();
    }
  }, [nextStep]);

  const { currentTitle, currentStep, prev, next } = useMultiStepForm([
    {
      title: "ID & PASSWORD",
      element: (
        <Step1
          formData={formData}
          setFormData={setFormData}
          updateForm={updateForm}
          next={() => setNextStep(next)}
        />
      ),
    },
    {
      title: "Phone & Birth",
      element: (
        <Step2
          formData={formData}
          setFormData={setFormData}
          updateForm={updateForm}
          next={() => setNextStep(next)}
          prev={() => setPrevStep(prev)}
        />
      ),
    },
    {
      title: "하고싶은 말",
      element: (
        <Step3
          formData={formData}
          setFormData={setFormData}
          updateForm={updateForm}
          next={() => setNextStep(next)}
          prev={() => setPrevStep(prev)}
        />
      ),
    },
  ]);

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted data:", formData);
  // };

  return (
    <>
      {/* <Form onSubmit={formSubmitHandler}> */}
      <Header>
        <StepTitle>{currentTitle}</StepTitle>
      </Header>
      {currentStep}
      {/* </Form> */}
    </>
  );
};
export default MultiStepSignUp;

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
  justify-content: center;
  display: flex;
  margin: 20px 100px;
  font-size: 18px;
  font-weight: 700;
`;

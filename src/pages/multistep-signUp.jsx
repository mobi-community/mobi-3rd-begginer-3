import useMultiStepForm from "../utils/useMultiStepForm";
import Step1 from "../components/step1";
import styled from "styled-components";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
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
  useEffect(() => {
    // sessionStorage에서 formData라는 키의 값을 가져와서 userData로 저장
    const userData = sessionStorage.getItem("formData");
    if (userData) {
      // state에 객체 형태로 userData 저장
      setFormData(JSON.parse(userData));
    }
  }, []);

  const updateForm = (form) => {
    setFormData((prev) => ({ ...prev, ...form }));
    sessionStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, ...form })
    );
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

  return (
    <>
      <Header>
        <StepTitle>{currentTitle}</StepTitle>
      </Header>
      {currentStep}
    </>
  );
};
export default MultiStepSignUp;

const Header = styled.header`
  margin: 20px;
`;

const StepTitle = styled.span`
  justify-content: center;
  display: flex;
  margin: 20px 100px;
  font-size: 18px;
  font-weight: 700;
`;

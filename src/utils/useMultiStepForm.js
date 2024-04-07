// useMultiStepForm 커스텀 훅
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // url 저장
  const [searchParams, setSearchParams] = useSearchParams();

  const step = Number(searchParams.get("step") || 1);

  useEffect(() => {
    setCurrentStepIndex(step - 1);
  }, [step]);

  const currentStep = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  // 저장된 sessionStorage Data 삭제
  /*  const removeForm = () => {
    sessionStorage.removeItem("formData");
  }; */

  const next = () => {
    if (step >= 3) {
      const sessionData = JSON.parse(sessionStorage.getItem("formData"));
      alert(JSON.stringify(sessionData));
    } else {
      setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
      setSearchParams({ step: step + 1 });
    }
  };

  const prev = () => {
    setCurrentStepIndex((i) => (i <= 0 ? 0 : i - 1));
    setSearchParams({ step: step - 1 });
    // 이전 버튼을 누를 경우 저장된 formData 삭제
    // removeForm();
  };

  return {
    currentStepIndex,
    currentTitle: currentStep ? currentStep.title : "",
    currentStep: currentStep ? currentStep.element : null,
    prev,
    next,
    isFirstStep,
    isLastStep,
    step: step,
  };
};

export default useMultiStepForm;

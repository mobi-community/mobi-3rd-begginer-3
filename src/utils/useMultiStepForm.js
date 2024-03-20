// useMultiStepForm 커스텀 훅
import { useState } from "react";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () => {
    setCurrentStepIndex((i) => (i <= 0 ? 0 : i - 1));
  };

  const next = () => {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  };

  const currentStep = steps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  return {
    currentTitle: currentStep.title, // 수정된 부분
    currentStep: currentStep.element, // 수정된 부분
    prev,
    next,
    isFirstStep,
    isLastStep,
  };
};

export default useMultiStepForm;

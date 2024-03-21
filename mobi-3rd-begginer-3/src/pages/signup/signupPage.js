import { useState } from "react";
import useMultiStepForm from "../../components/hook/multiStep";
import FREETXTForm from "./FREETEXTForm";
import ID_PWForm from "./ID_PWForm";
import PHONE_BIRTHForm from "./PHONE_BIRTHForm";
import Button from "@mui/material/Button";

const SignupPage = () => {
    const initialFormData = {
        id: "",
        password: "",
        phoneNumber: "",
        birth: "",
        freetext: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [formIsValid, setFormIsValid] = useState(false);
    const updateForm = (form) => {
        setFormData((prev) => ({ ...prev, ...form }));
    };
    const {
        currentTitle,
        currentStep,
        prev,
        next,
        isFirstStep,
        isLastStep,
        isValid,
    } = useMultiStepForm([
        {
            title: "ID_PWForm",
            element: <ID_PWForm {...formData} updateForms={updateForm} />,
        },
        {
            title: "PHONE_BIRTHForm",
            element: <PHONE_BIRTHForm {...formData} updateForms={updateForm} />,
        },
        {
            title: "FREE",
            element: <FREETXTForm {...formData} updateForms={updateForm} />,
        },
    ]);

    return (
        <>
            <div>signup</div>
            <Button onClick={prev}>Prev</Button>
            <span>{currentTitle}</span>
            <Button onClick={next}>{isLastStep ? "Submit" : "Next"}</Button>
            {currentStep}
        </>
    );
};
export default SignupPage;

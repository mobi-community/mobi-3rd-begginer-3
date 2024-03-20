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
        freeTxt: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const updateFields = (fields) => {
        setFormData((prev) => ({ ...prev, ...fields }));
    };
    const { currentTitle, currentStep, prev, next, isFirstStep, isLastStep } =
        useMultiStepForm([
            {
                title: "ID_PWForm",
                element: (
                    <ID_PWForm {...formData} updateFields={updateFields} />
                ),
            },
            {
                title: "PHONE_BIRTHForm",
                element: (
                    <PHONE_BIRTHForm
                        {...formData}
                        updateFields={updateFields}
                    />
                ),
            },
            {
                title: "FREE",
                element: (
                    <FREETXTForm {...formData} updateFields={updateFields} />
                ),
            },
        ]);
    return (
        <>
            <div>signup</div>

            <form onSubmit={(e) => e.preventDefault()}>
                <Button onClick={prev}>Prev</Button>
                <span>{currentTitle}</span>
                <Button onClick={next}>{isLastStep ? "Submit" : "Next"}</Button>
                {currentStep}
            </form>
        </>
    );
};
export default SignupPage;

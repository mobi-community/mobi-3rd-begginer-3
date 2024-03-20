import { useState } from "react";
import useMultiStepForm from "../../components/hook/multiStep";
import FREETXTForm from "./FREETEXTForm";
import ID_PWForm from "./ID_PWForm";
import PHONE_BIRTHForm from "./PHONE_BIRTHForm";

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
                <button onClick={prev}>Prev</button>
                <span>{currentTitle}</span>
                <button onClick={next}>{isLastStep ? "Submit" : "Next"}</button>
                {currentStep}
            </form>
        </>
    );
};
export default SignupPage;

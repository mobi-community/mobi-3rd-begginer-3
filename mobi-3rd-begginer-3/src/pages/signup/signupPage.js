import { useState } from "react";
import useMultiStepForm from "../../components/hook/multiStep";
import FREETXTForm from "./FREETEXTForm";
import IdPwForm from "./ID_PWForm";
import PhoneBirthForm from "./PHONE_BIRTHForm";

const SignupPage = () => {
    const initialFormData = {
        id: "",
        password: "",
        phoneNumber: "",
        birth: "",
        freetext: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const updateForm = (form) => {
        setFormData((prev) => ({ ...prev, ...form }));
    };
    const { currentTitle, currentStep, prev, next } = useMultiStepForm([
        {
            title: "ID_PWForm",
            element: (
                <IdPwForm
                    {...formData}
                    updateForms={updateForm}
                    next={() => next()}
                />
            ),
        },
        {
            title: "PHONE_BIRTHForm",
            element: (
                <PhoneBirthForm
                    {...formData}
                    updateForms={updateForm}
                    next={() => next()}
                    prev={() => prev()}
                />
            ),
        },
        {
            title: "FREE",
            element: (
                <FREETXTForm
                    {...formData}
                    updateForms={updateForm}
                    next={() => next()}
                    prev={() => prev()}
                />
            ),
        },
    ]);

    return (
        <>
            <div>signup</div>
            <span>{currentTitle}</span>
            {currentStep}
        </>
    );
};
export default SignupPage;

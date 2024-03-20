import useMultiStepForm from "../../components/hook/multiStep";

const SignupPage = () => {
    const { currentTitle, currentStep, prev, next, isFirstStep, isLastStep } =
        useMultiStepForm([
            {
                title: "ID_PWForm",
                element: <h4>ID&PW Section</h4>,
            },
            {
                title: "PHONE_BIRTHForm",
                element: <h4>PHONE&BIRTH Section</h4>,
            },
            {
                title: "FREE",
                element: <h4>FREE Section</h4>,
            },
        ]);
    return (
        <>
            <div>signup</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <button>Prev</button>
                <span>{currentTitle}</span>
                <button>Next</button>
                {currentStep}
            </form>
        </>
    );
};
export default SignupPage;

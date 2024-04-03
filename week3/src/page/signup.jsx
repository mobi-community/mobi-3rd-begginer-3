import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import FirstForm from "../components/signup/first-form";
import SecondForm from "../components/signup/second-from";
import ThirdForm from "../components/signup/third-form";

const Signup = () => {
    // RHF
    //register/isvalid

    const [searchParams, setSearchParams] = useSearchParams();
    const [changeFormData, setChangeFormData] = useState({});

    const step = Number(searchParams.get("step") || 1);

    useEffect(() => {
        // sessionStorage에서 formData라는 키의 값을 가져와서 userData로 저장
        const userData = sessionStorage.getItem("formData");
        if (userData) {
            // state에 객체 형태로 userData 저장
            setChangeFormData(JSON.parse(userData));
        }
    }, [step]);

    // 모든 입력을 받고 sessionStorage에 저장하기 위한 submit event
    const onResultSubmit = () => {
        const userData = sessionStorage.getItem("formData");
        alert(userData);
    };

    const nextStep = () => {
        setSearchParams({ step: step + 1 });
    };
    const prevStep = () => {
        setSearchParams({ step: step - 1 });
    };

    return (
        <ContainerForm>
            <Wrapper>
                {step === 1 && (
                    <>
                        <FirstForm
                            onNext={nextStep}
                            initData={changeFormData}
                            // register={register}
                            // isValid={isValid}
                        />
                    </>
                )}
                {step === 2 && (
                    <SecondForm
                        onNext={nextStep}
                        onPrev={prevStep}
                        initData={changeFormData}
                    />
                )}
                {step === 3 && (
                    <ThirdForm
                        onPrev={prevStep}
                        initData={changeFormData}
                        onNext={onResultSubmit}
                    />
                )}
            </Wrapper>
        </ContainerForm>
    );
};
export default Signup;

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

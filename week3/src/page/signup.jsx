import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/signup-schema";
import FirstForm from "../components/signup/first-form";
import SecondForm from "../components/signup/second-from";
import ThirdForm from "../components/signup/third-form";

const Signup = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const step = Number(searchParams.get("step") || 1);

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange", resolver: yupResolver(signupSchema) });

    const navigate = useNavigate();

    useEffect(() => {
        const userData = sessionStorage.getItem("formData");
        if (userData) {
            const saveData = JSON.parse(userData);
            for (const key in saveData) {
                setValue(key, saveData[key]);
            }
        }
    }, [setValue]);

    const onClickButton = (data) => {
        console.log(data);
        navigate("/");
        sessionStorage.setItem("formData", JSON.stringify(data));
        alert(`email: ${data.email}
            password: ${data.password}
            phone: ${data.phone}
            birthday: ${data.birthday}
        `);
    };

    const nextStep = () => {
        const curFormData = getValues();
        const saveData = JSON.parse(sessionStorage.getItem("formData") || "{}");
        const updateData = { ...saveData, ...curFormData };
        sessionStorage.setItem("formData", JSON.stringify(updateData));
        setSearchParams({ step: step + 1 });
    };
    const prevStep = () => {
        setSearchParams({ step: step - 1 });
    };

    console.log(isValid);
    console.error(errors);

    return (
        <ContainerForm>
            <Wrapper onSubmit={handleSubmit(onClickButton)}>
                {step === 1 && (
                    <>
                        <FirstForm
                            register={register}
                            onNext={nextStep}
                            errors={errors}
                            isValid={isValid}
                        />
                    </>
                )}
                {step === 2 && (
                    <SecondForm
                        register={register}
                        onNext={nextStep}
                        onPrev={prevStep}
                        errors={errors}
                        isValid={isValid}
                    />
                )}
                {step === 3 && (
                    <ThirdForm
                        register={register}
                        errors={errors}
                        isValid={isValid}
                        onPrev={prevStep}
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

const Wrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

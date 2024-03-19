import { useEffect } from "react";
import CustomButton from "../components/common/custom-button";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import CustomInput from "../components/common/custom-input";
import { useNavigate } from "react-router-dom";
import CustomTextarea from "../components/common/custom-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/signup-schema";

const Signup = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange", resolver: yupResolver(signupSchema) });

    const navigate = useNavigate();

    useEffect(() => {
        const userData = sessionStorage.getItem("userData");
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
        sessionStorage.setItem("userData", JSON.stringify(data));
        alert(`email: ${data.email}
            password: ${data.password}
            phone: ${data.phone}
            birthday: ${data.birthday}
        `);
    };

    return (
        <ContainerForm>
            <Wrapper onSubmit={handleSubmit(onClickButton)}>
                <CustomInput
                    register={register}
                    title="이메일"
                    registerKey="email"
                    placeholder="이메일을 입력해주세요"
                    theme={"richGrayBlack"}
                    size={"small"}
                    errors={errors}
                />
                <CustomInput
                    register={register}
                    title="비밀번호"
                    registerKey="password"
                    placeholder="비밀번호를 입력해주세요"
                    theme={"mediumDarkGray"}
                    size={"small"}
                    type="password"
                    errors={errors}
                />
                <CustomInput
                    register={register}
                    title="비밀번호 확인"
                    registerKey="password_confirm"
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    theme={"mediumDarkGray"}
                    size={"small"}
                    errors={errors}
                />
                <CustomInput
                    register={register}
                    title="연락처"
                    registerKey="phone"
                    placeholder="연락처를 입력해주세요"
                    theme={"creamWhite"}
                    size={"small"}
                    errors={errors}
                />
                <CustomInput
                    register={register}
                    title="생년월일"
                    registerKey="birthday"
                    placeholder="YYYY-MM-DD 형식으로 입력해주세요"
                    theme={"creamWhite"}
                    size={"small"}
                    errors={errors}
                />
                <CustomTextarea
                    register={register}
                    title="하고싶은 말"
                    registerKey="wanttosay"
                    placeholder="하고 싶은 말을 입력해주세요."
                    theme={"richGrayBlack"}
                    size={"medium"}
                    errors={errors}
                />

                <ButtonBox>
                    <CustomButton
                        theme={"verylightWhith"}
                        size={"medium"}
                        disable={!isValid}
                    >
                        가입하기
                    </CustomButton>
                </ButtonBox>
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

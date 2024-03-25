import styled from "styled-components";
import CustomInput from "../common/custom-input";
import CustomButton from "../common/custom-button";
import { firstSignupSchema } from "../../schemas/first-signup-schema";
import UseFormHandle from "../../hook/useFormHandle";

const FirstForm = ({ onNext, initData }) => {
    // UserFormHandle custon hook 사용
    const { register, handleSubmit, onSubmit, errors, isValid } = UseFormHandle(
        initData,
        firstSignupSchema,
        onNext
    );

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
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
            <ButtonBox>
                <CustomButton
                    type={"submit"}
                    theme={"deepDark"}
                    size={"small"}
                    disabled={!isValid}
                >
                    NEXT
                </CustomButton>
            </ButtonBox>
        </Container>
    );
};
export default FirstForm;

const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

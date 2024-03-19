import styled from "styled-components";
import CustomInput from "../common/custom-input";
import CustomButton from "../common/custom-button";

const FirstForm = ({ register, errors, onNext, isValid }) => {
    return (
        <Container>
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
                    type={"button"}
                    theme={"deepDark"}
                    size={"small"}
                    disabled={!isValid}
                    onClick={onNext}
                >
                    NEXT
                </CustomButton>
            </ButtonBox>
        </Container>
    );
};
export default FirstForm;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

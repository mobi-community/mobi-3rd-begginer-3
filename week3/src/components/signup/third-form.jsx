import styled from "styled-components";
import CustomButton from "../common/custom-button";
import CustomTextarea from "../common/custom-textarea";
import { thirdSignupSchema } from "../../schemas/third-signup-schema";
import UseFormHandle from "../../hook/useFormHandle";

const ThirdForm = ({ onPrev, initData, onNext }) => {
    const { register, handleSubmit, onSubmit, errors, isValid } = UseFormHandle(
        initData,
        thirdSignupSchema,
        onNext
    );

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <CustomTextarea
                register={register}
                title="하고싶은 말"
                registerKey="wanttosay"
                placeholder="하고 싶은 말을 입력해주세요."
                theme={"richGrayBlack"}
                size={"medium"}
                errors={errors}
            />
            <CustomButton
                type={"button"}
                theme={"deepDark"}
                size={"small"}
                onClick={onPrev}
            >
                PREV
            </CustomButton>
            <ButtonBox>
                <CustomButton
                    theme={"verylightWhith"}
                    size={"medium"}
                    disabled={!isValid}
                >
                    가입하기
                </CustomButton>
            </ButtonBox>
        </Container>
    );
};
export default ThirdForm;

const Container = styled.form``;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

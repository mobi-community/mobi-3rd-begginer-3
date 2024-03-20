import styled from "styled-components";
import CustomInput from "../common/custom-input";
import CustomButton from "../common/custom-button";
import { secondSignupSchema } from "../../schemas/second-signup-schema";
import UseFormHandle from "../../hook/useFormHandle";

const SecondForm = ({ onPrev, onNext, initData }) => {
    const { register, handleSubmit, onSubmit, errors, isValid } = UseFormHandle(
        initData,
        secondSignupSchema,
        onNext
    );

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
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
            <ButtonBox>
                <CustomButton
                    type={"button"}
                    theme={"deepDark"}
                    size={"small"}
                    onClick={onPrev}
                >
                    PREV
                </CustomButton>
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
export default SecondForm;

const Container = styled.form``;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

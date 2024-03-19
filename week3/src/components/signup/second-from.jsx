import styled from "styled-components";
import CustomInput from "../common/custom-input";
import CustomButton from "../common/custom-button";

const SecondForm = ({ onNext, onPrev, register, errors, isValid }) => {
    return (
        <Container>
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
                    disabled={!isValid}
                    onClick={onPrev}
                >
                    PREV
                </CustomButton>
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
export default SecondForm;

const Container = styled.div``;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

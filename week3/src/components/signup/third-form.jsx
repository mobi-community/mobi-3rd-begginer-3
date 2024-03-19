import styled from "styled-components";
import CustomInput from "../common/custom-input";
import CustomButton from "../common/custom-button";

import CustomTextarea from "../common/custom-textarea";

const ThirdForm = ({ register, onPrev, errors, isValid }) => {
    return (
        <Container>
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
                disabled={!isValid}
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

const Container = styled.div``;

const ButtonBox = styled.div`
    padding: 10px 0;
`;

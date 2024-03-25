import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../common/custom-button";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);

    const onRHFNavigate = () => {
        setIsDisabled(true);
        navigate("/signup");
    };

    const onYUPNavigate = () => {
        setIsDisabled(true);
        navigate("/signup");
    };

    return (
        <Wrapper>
            <div></div>
            <TitleBox>
                <h2>회원가입 토이프로젝트</h2>
            </TitleBox>
            <SignBox>
                <CustomButton
                    theme={"deepDark"}
                    size={"small"}
                    onClick={onRHFNavigate}
                    disable={isDisabled}
                >
                    RHF 회원가입
                </CustomButton>
            </SignBox>
        </Wrapper>
    );
};
export default Header;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignBox = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px;
`;

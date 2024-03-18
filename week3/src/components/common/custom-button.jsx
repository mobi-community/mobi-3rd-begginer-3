import { SButton } from "../../style/button.style";

const CustomButton = ({
    children,
    theme,
    size,
    disable,
    $isActive,
    onClick,
}) => {
    const disabledTheme = "disabled";

    const buttonTheme = disable ? disabledTheme : theme;

    return (
        <SButton
            theme={buttonTheme}
            size={size}
            disabled={disable}
            isActive={$isActive}
            onClick={onClick}
        >
            {children}
        </SButton>
    );
};
export default CustomButton;

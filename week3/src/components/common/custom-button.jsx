import { SButton } from "../../style/button.style";

const CustomButton = ({
    children,
    theme,
    size,
    disabled,
    $isActive,
    onClick,
    type,
}) => {
    const disabledTheme = "disabled";

    const buttonTheme = disabled ? disabledTheme : theme;

    return (
        <SButton
            theme={buttonTheme}
            type={type}
            size={size}
            disabled={disabled}
            isActive={$isActive}
            onClick={onClick}
        >
            {children}
        </SButton>
    );
};
export default CustomButton;

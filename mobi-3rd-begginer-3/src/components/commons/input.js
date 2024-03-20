import { StyleInput } from "../Theme/input.style";

const Input = ({
    type,
    placeholder,
    size,
    color,
    registerKey = "",
    register = () => {},
    validate = {},
    titleText = "",
}) => {
    return (
        <>
            {titleText && <label htmlFor={registerKey}>{titleText}</label>}
            <StyleInput
                {...register(registerKey, validate)}
                id={registerKey}
                type={type}
                color={color}
                placeholder={placeholder}
                size={size}
            />
        </>
    );
};
export default Input;

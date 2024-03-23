import { StyleInput } from "../Theme/input.style";

const Input = ({
    type,
    placeholder,
    size,
    color,
    registerKey = "",
    register,
    validate = {},
    titleText = "",
    errors = {},
    ...rest
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
                {...rest}
            />
            <div>
                {errors[registerKey] && (
                    <span>{errors[registerKey].message}</span>
                )}
            </div>
        </>
    );
};
export default Input;

import { StyleInput } from "../Theme/input.style";

const Input = ({ type, placeholder, size, color }) => {
    return (
        <StyleInput
            type={type}
            color={color}
            placeholder={placeholder}
            size={size}
        />
    );
};
export default Input;

import { StyleInput } from "../styleTheme/input.style.js";

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

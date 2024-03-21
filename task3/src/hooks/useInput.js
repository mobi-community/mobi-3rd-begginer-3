import { useState } from "react";

const useInput = (initValue) => {
	const [value, setValue] = useState(initValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const reset = () => {
		setValue(initValue);
	};

	return {
		value,
		onChange: handleChange,
		reset,
	};
};
export default useInput;

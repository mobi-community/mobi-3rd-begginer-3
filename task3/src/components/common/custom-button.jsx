import { SButton } from "../../styles/button.style";

const CustomButton = ({
	theme,
	size,
	disabled,
	$isActive,
	onClick,
	chlidren,
}) => {
	return (
		<SButton
			theme={theme}
			size={size}
			disabled={disabled}
			isActive={$isActive}
			onClick={onClick}
		>
			{chlidren}
		</SButton>
	);
};
export default CustomButton;

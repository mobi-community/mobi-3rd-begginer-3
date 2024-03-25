import { CheckBoxStyle } from "../../styles/checkbox.style";

const CustomCheckbox = ({ label, onChange, checked, labelColor, theme }) => {
	return (
		<CheckBoxStyle.Container>
			<CheckBoxStyle.SCheckBox theme={theme}>
				<CheckBoxStyle.HiddenBox
					type="checkbox"
					checked={checked}
					onChange={onChange}
				>
					{checked && <CheckBoxStyle.CheckMark />}
				</CheckBoxStyle.HiddenBox>
				{label && (
					<CheckBoxStyle.CheckBoxLabel labelColor={labelColor}>
						{label}
					</CheckBoxStyle.CheckBoxLabel>
				)}
			</CheckBoxStyle.SCheckBox>
		</CheckBoxStyle.Container>
	);
};
export default CustomCheckbox;

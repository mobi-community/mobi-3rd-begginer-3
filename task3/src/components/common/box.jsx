import { colors } from "../../constants/design-token/color";
import spacing from "../../constants/design-token/spacing";
import { borders } from "../../constants/design-token/tokens";

const Box = ({ style, children }) => {
	const boxStyle = {
		padding: spacing.medium,
		border: `${borders.width} solid ${colors.dark}`,
		borderRadius: borders.radius,
		...style,
	};

	return <div style={boxStyle}>{children}</div>;
};
export default Box;

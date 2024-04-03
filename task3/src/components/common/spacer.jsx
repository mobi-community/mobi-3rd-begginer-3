import styled from "styled-components";

const Spacer = ({ width, height, ...rest }) => {
	return <SpaceBox width={width} height={height} {...rest} />;
};
export default Spacer;

const SpaceBox = styled.span`
	display: block;
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	min-width: ${({ width }) => width}px;
	min-height: ${({ height }) => height}px;
`;

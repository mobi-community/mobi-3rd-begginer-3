import styled from "styled-components";

import Box from "../components/common/box";
import TodoList from "../components/main/todo-list";
import { colors } from "../constants/design-token/color";
import layoutStyle from "../constants/design-token/layout";

const Main = () => {
	return (
		<Container>
			<Box
				style={{
					backgroundColor: `${colors.background}`,
					width: `${layoutStyle.container}`,
					height: `${layoutStyle.container}`,
				}}
			>
				<Container>
					<TodoList />
				</Container>
			</Box>
		</Container>
	);
};

export default Main;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

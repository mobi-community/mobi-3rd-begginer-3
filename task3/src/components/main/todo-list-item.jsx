import styled from "styled-components";

const TodoListItem = ({ item, onToggle }) => {
	return (
		<ItemContainer>
			<CheckBox
				type="checkbox"
				checked={item.completed}
				onChange={onToggle}
			/>
			<Title completed={item.completed}>{item.text}</Title>
		</ItemContainer>
	);
};
export default TodoListItem;

const ItemContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CheckBox = styled.input``;
const Title = styled.p`
	padding-left: 10px;
	text-decoration: ${({ completed }) =>
		completed ? "line-through" : "none"};
`;

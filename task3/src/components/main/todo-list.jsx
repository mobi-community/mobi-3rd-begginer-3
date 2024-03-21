import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import useInput from "../../hooks/useInput";
import { addTodo, toggleTodo } from "../../libs/redux/actions";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
	// custom hook 인 useInput사용
	const { value, onChange, reset } = useInput("");

	// redux 스토어에서 todos 상태를 가져옴
	const todos = useSelector((state) => state.todos.listData);
	// redux 스토어의 dispatch 함수 사용을 위한 훅
	const dispatch = useDispatch();

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (value.trim()) {
			// addTodo 액션을 디스패치하여 아이템 추가
			dispatch(addTodo(value));
			reset();
		}
	};

	const handleToggleCompleted = (index) => {
		dispatch(toggleTodo(index));
	};

	return (
		<Container>
			<input type="text" value={value} onChange={onChange} />
			<button onClick={handleAddTodo}>추가</button>
			{todos.map((item, index) => (
				<Wrapper key={index}>
					<TodoListItem
						item={item}
						onToggle={() => handleToggleCompleted(index)}
					/>
				</Wrapper>
			))}
		</Container>
	);
};
export default TodoList;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

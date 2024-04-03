import { ADD_TODO, TOGGLE_TODO } from "./actions";

// reducer의 초기 상태를 설정
const initState = {
	listData: [
		{ text: "Item 1", completed: false },
		{ text: "Item 2", completed: false },
		{ text: "Item 3", completed: false },
		{ text: "Item 4", completed: false },
	],
};

const todoReducer = (state = initState, action) => {
	// 액션 타입에 따라 분기 처리
	switch (action.type) {
		// 세 todo list 아이템 추가 액션 처리
		case ADD_TODO:
			return {
				...state, // 현재 상태 유지
				// 배열 업데이트
				listData: [
					...state.listData, // 기존 아이템 유지
					{ text: action.payload.text, completed: false },
				],
			};
		case TOGGLE_TODO:
			return {
				...state,
				listData: state.listData.map(
					(item, index) =>
						index === action.payload.index // 해당 인덱스의 아이템 찾기
							? { ...item, completed: !item.completed } // 완료 상태 반전
							: item // 나머지 변경 없음
				),
			};
		default:
			return state;
	}
};

export default todoReducer;

import { LIMIT_PAGE, LIMIT_TAKE } from "../actions/types";

const initState = {
    limitPage: 10,
    limitTake: 20,
};

const PageNationReducer = (state = initState, action) => {
    switch (action.type) {
        // limitPage 상태를 payload 값으로 업데이트
        case LIMIT_PAGE:
            return { ...state, limitPage: action.payload };
        // limitTake 상태를 payload 값으로 업데이트
        case LIMIT_TAKE:
            return { ...state, limitTake: action.payload };
        default:
            return state;
    }
};

export default PageNationReducer;

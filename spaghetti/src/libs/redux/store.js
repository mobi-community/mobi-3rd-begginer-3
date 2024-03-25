import { configureStore } from "@reduxjs/toolkit";
import PageNationReducer from "./reducers/pageNationReducer";

const store = configureStore({
    reducer: {
        pageNation: PageNationReducer,
    },
});

export default store;

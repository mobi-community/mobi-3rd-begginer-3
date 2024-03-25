import { LIMIT_PAGE, LIMIT_TAKE } from "./types";

export const setLimitPage = (limit) => ({
    type: LIMIT_PAGE,
    payload: limit,
});

export const setLimitTake = (limit) => ({
    type: LIMIT_TAKE,
    payload: limit,
});

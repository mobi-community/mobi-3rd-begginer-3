import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setLimitPage, setLimitTake } from "../../libs/redux/actions";
import { pageNationApi } from "../../libs/axios/api";

const GenericPageNation = ({ apiUrl }) => {
    const [params, setParams] = useSearchParams();
    const [pageNation, setPageNation] = useState();
    const dispatch = useDispatch();
    const { limitPage, limitTake } = useSelector((state) => state.pageNation);

    useEffect(() => {
        dispatch(setLimitPage(10));
        dispatch(setLimitTake(20));
    }, [dispatch]);

    const fetchPageNation = useCallback(async () => {
        const fetchData = await pageNationApi({
            params: params,
            limitTake: limitTake,
            limitPage: limitPage,
            url: apiUrl,
        });
        const pageNation = fetchData.PageNation;
        setPageNation({
            ...pageNation,
        });
    }, [params, limitTake, limitPage, apiUrl]);

    useEffect(() => {
        fetchPageNation();
    }, [fetchPageNation, params]);

    const onClickPage = (page) => {
        setParams({
            page,
        });
    };

    const isPrevPageVisible = pageNation?.startPage !== 1;
    const isNextPageVisible =
        Math.ceil(pageNation?.currentPage / limitPage) !==
        Math.ceil(pageNation?.totalPage / limitPage);

    return (
        <div>
            {isPrevPageVisible && (
                <button
                    onClick={() =>
                        setParams({ page: pageNation.startPage - 1 })
                    }
                >
                    이전
                </button>
            )}
            {pageNation &&
                Array(pageNation.endPage - pageNation.startPage + 1)
                    .fill()
                    .map((_, i) => pageNation.startPage + i)
                    .map((page) => (
                        <button key={page} onClick={() => onClickPage(page)}>
                            {page}
                        </button>
                    ))}
            {isNextPageVisible && (
                <button
                    onClick={() => setParams({ page: pageNation.endPage + 1 })}
                >
                    다음
                </button>
            )}
        </div>
    );
};
export default GenericPageNation;

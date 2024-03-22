import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setLimitPage, setLimitTake } from "../../libs/redux/actions";
import { pageNationApi } from "../../libs/axios/api";
/**
 *
 * @param (string) apiUrl - 페이지네이션 정보를 가져올 API입니다.
 * @returns {JSX.Element}
 *
 * @description
 * 기존 Pagenation.Posts와 Pagenation.Comments를 합쳐서 관리하는 범용 컴포넌트 입니다.
 */

const GenericPageNation = ({ apiUrl }) => {
    const [params, setParams] = useSearchParams();
    const [pageNation, setPageNation] = useState();

    // dispatch 함수를 사용
    const dispatch = useDispatch();

    // store에서 페이지네이션 설정을 가져옴
    const { limitPage, limitTake } = useSelector((state) => state.pageNation);

    // 마운트될 때 페이지네이션의 limit값들을 설정.
    useEffect(() => {
        dispatch(setLimitPage(10));
        dispatch(setLimitTake(20));
    }, [dispatch]);

    // api 호출
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

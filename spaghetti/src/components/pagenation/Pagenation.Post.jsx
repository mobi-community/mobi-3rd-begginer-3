import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LIMIT_PAGE = 10; // 한번에 보여주는 페이지 번호 갯수
const LIMIT_TAKE = 20; // 한번에 가지고 오는 양

const PostPageNation = () => {
  const [params, setParams] = useSearchParams();
  const [pageNation, setPageNation] = useState();
  console.log(' ')
  console.log(' ')
  console.log("👇 이걸봐")
  console.log(pageNation)
  console.log(params.get("page"))
  console.log(params.get("limit"))
  console.log(pageNation?.startPage)
  console.log(' ')

  const fetchPostPageNation = useCallback(async () => {
    const response = await axios.get("/api/posts", {
      params: {
        page: params.get("page") ?? 1,
        take: params.get("take") ?? LIMIT_TAKE,
        limit: params.get("limit") ?? LIMIT_PAGE,
      },
    });
    const pageNation = response.data.PageNation;
    setPageNation({
      ...pageNation,
    });
  }, [params]);

  useEffect(() => {
    fetchPostPageNation();
  }, [fetchPostPageNation, params]);

  const onClickPage = (page) => {
    setParams({
      page,
    });
  };

  const isPrevPageVisible = pageNation?.startPage !== 1;
  const isNextPageVisible =
    Math.ceil(pageNation?.currentPage / LIMIT_PAGE) !==
    Math.ceil(pageNation?.totalPage / LIMIT_PAGE);

  return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => setParams({ page: pageNation.startPage - 1 })}>
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
        <button onClick={() => setParams({ page: pageNation.endPage + 1 })}>
          다음
        </button>
      )}
    </div>
  );
};
export default PostPageNation;
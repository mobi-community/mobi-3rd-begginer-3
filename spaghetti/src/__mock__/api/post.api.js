import { rest } from "msw";
import {
  definePostComment,
  definePostDetail,
  definePostList,
} from "../data/post.data";

export const getPostList = rest.get("/api/posts", async (req, res, ctx) => {
  const page = req.url.searchParams.get("page");
  const limit = req.url.searchParams.get("limit");
  const take = req.url.searchParams.get("take");
  const count = 486;

  const totalPage = Math.ceil(count / parseInt(take));
  let startPage = Math.floor((page - 1) / limit) * limit + 1;
  let endPage = parseInt(startPage) + parseInt(limit) - 1;

  if (endPage >= totalPage) endPage = totalPage;
  if (startPage > endPage && endPage < totalPage) {
    startPage = endPage;
    endPage = startPage + limit - 1;
  }
  return res(
    ctx.status(200),
    ctx.json({
      PageNation: {
        totalCount: count,
        totalPage,
        currentPage: parseInt(page),
        startPage,
        endPage,
      },
      Posts: definePostList(parseInt(take)),
    })
  );
});

/**
 * @update
 * - 기존 코드는 고유번호(id) 를 랜덤생성하여 반환했습니다. 
 * - mock-data 이지만, 게시물 상세 조회 기능의 의미를 생각했을 때, 고유번호를 전달받고 그대로 반환하는 것으로 수정했습니다.
 * - 이렇게 수정해야, fetching 기능 테스트에도 좋을 것 같아요.
 */
export const getPostDetail = rest.get("/api/post/:postId", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ ...definePostDetail, id: req.params.postId }));
});

export const getCommentList = rest.get(
  "/api/comments",
  async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const limit = req.url.searchParams.get("limit");
    const take = req.url.searchParams.get("take");
    const count = 311;

    console.log(take);

    const totalPage = Math.ceil(count / parseInt(take));
    let startPage = Math.floor((page - 1) / limit) * limit + 1;
    let endPage = parseInt(startPage) + parseInt(limit) - 1;

    if (endPage >= totalPage) endPage = totalPage;
    if (startPage > endPage && endPage < totalPage) {
      startPage = endPage;
      endPage = startPage + limit - 1;
    }

    return res(
      ctx.status(200),
      ctx.json({
        PageNation: {
          totalCount: count,
          totalPage,
          currentPage: parseInt(page),
          startPage,
          endPage,
        },
        Comments: definePostComment(parseInt(take)),
      })
    );
  }
);

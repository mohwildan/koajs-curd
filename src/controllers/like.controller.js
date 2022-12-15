import { createLike, deleteLike } from "../services/like.service.js";

export const createLikeHandler = async (ctx) => {
  try {
    const like = await createLike(ctx);
    ctx.body = like;
    ctx.status = 201
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const deleteLikeHandler = async (ctx) => {
  try {
    const like = await deleteLike(ctx)
    ctx.body = like
  } catch (error) {
    console.log(error)
    ctx.status = 400
    ctx.body = error.message
  }
}

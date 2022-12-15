import likeModel from "../models/like.model.js";

export const createLike = async (ctx) => {
  const { author, postid } = ctx.request.body;
  try {
    const like = await likeModel.create({
      author,
      postid,
    });
    return like;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteLike = async (ctx) => {
  const { id } = ctx.params
  try {
    const like = await likeModel.findByIdAndDelete(id)
    return like
  } catch (error) {
    throw new Error(error)
  }
}

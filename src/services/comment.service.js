import commentModel from "../models/comment.model.js";

export const createComment = async (ctx) => {
  const { author, postid, text } = ctx.request.body;
  try {
    const comment = await commentModel.create({
      author,
      postid,
      text,
    });
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};

export const getComment = async () => {
  try {
    const comment = await commentModel.find().populate("author");
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteComment = async (ctx) => {
  const { id } = ctx.params;
  try {
    const comment = await commentModel.findByIdAndDelete(id);
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};
export const updateComment = async (ctx) => {
  const { id } = ctx.params;
  const { text } = ctx.request.body;

  try {
    const comment = await commentModel.findByIdAndUpdate(id, {
      text,
    });
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCommentById = async (ctx) => {
  const { id } = ctx.params;
  try {
    const comment = await commentModel.findById(id);
    return comment;
  } catch (error) {
    throw new Error(error);
  }
};

import {
  createComment,
  deleteComment,
  getComment,
  getCommentById,
  updateComment,
} from "../services/comment.service.js";

export const createCommentHandler = async (ctx) => {
  try {
    const comment = await createComment(ctx);
    ctx.staus = 201;
    ctx.body = comment;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const getCommentHandler = async (ctx) => {
  try {
    const comment = await getComment();
    ctx.body = comment;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const deleteCommentHandler = async (ctx) => {
  try {
    const comment = await deleteComment(ctx);
    ctx.body = comment;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const updateCommentHandler = async (ctx) => {
  try {
    const comment = await updateComment(ctx);
    ctx.body = comment;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const getCommentByIdHandler = async (ctx) => {
  try {
    const comment = await getCommentById(ctx);
    ctx.body = comment;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = comment.message;
  }
};

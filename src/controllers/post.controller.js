import {
  createPost,
  deletePost,
  getPost,
  getPostById,
  updatePost,
} from "../services/post.service.js";

export const createPostHandler = async (ctx) => {
  try {
    const post = await createPost(ctx);
    ctx.status = 201;
    ctx.body = post;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};
export const getPostHandler = async (ctx) => {
  try {
    const post = await getPost();
    ctx.body = post;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};
export const deletePostHandler = async (ctx) => {
  try {
    const post = await deletePost(ctx);
    ctx.body = post;
  } catch (error) {
    console.log(error);
    ctx.status = 200;
    ctx.body = error.message;
  }
};
export const getPostByIdHandler = async (ctx) => {
  try {
    const post = await getPostById(ctx);
    ctx.body = post;
  } catch (error) {
    console.log(error);
    ctx.status = 200;
    ctx.body = error.message;
  }
};
export const updatePostByIdHandler = async (ctx) => {
  try {
    const post = await updatePost(ctx);
    ctx.body = post;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
  }
};

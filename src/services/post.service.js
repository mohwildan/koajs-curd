import postModel from "../models/post.model.js";

export const createPost = async (ctx) => {
  const { text, img, author } = ctx.request.body;
  try {
    const post = await postModel.create({
      text,
      img,
      author,
    });
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPost = async () => {
  const post = await postModel.find().populate("author");
  return post;
};

export const deletePost = async (ctx) => {
  const { id } = ctx.params;
  const post = await postModel.deleteOne({ _id: id });
  return post;
};

export const getPostById = async (ctx) => {
  const { id } = ctx.params;
  const post = await postModel.findById(id);
  return post;
};

export const updatePost = async (ctx) => {
  const { id } = ctx.params;
  const { text } = ctx.request.body;
  const post = await postModel.findByIdAndUpdate(id, {
    text,
  });
  return post;
};

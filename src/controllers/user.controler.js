import {
  createUser,
  deleteUser,
  getUserAll,
  loginUser,
  updateUser,
} from "../services/user.service.js";

export const registerUserHandler = async (ctx) => {
  try {
    const user = await createUser(ctx);
    ctx.body = user;
  } catch (error) {
    console.log(error);
    ctx.status = 409;
    ctx.body = error.message;
  }
};

export const loginUserHandler = async (ctx) => {
  try {
    const user = await loginUser(ctx);
    ctx.body = user;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const getUserHandler = async (ctx) => {
  return (ctx.body = ctx.user);
};

export const getUserAllHandler = async (ctx) => {
  try {
    const user = await getUserAll(ctx);
    ctx.body = user;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const deleteUserHandler = async (ctx) => {
  try {
    const user = await deleteUser(ctx);
    ctx.body = user;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

export const updateUserHandler = async (ctx) => {
  try {
    const user = await updateUser(ctx);
    ctx.body = user;
  } catch (error) {
    console.log(error);
    ctx.status = 400;
    ctx.body = error.message;
  }
};

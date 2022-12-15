import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cludinaryUtil.js";

export const createUser = async (ctx) => {
  const { name, email, password, username } = ctx.request.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    const findUser = await userModel.findOne({ email });
    if (findUser) {
      ctx.status = 409;
      return {
        message: `email: ${email} user arledy exits`,
      };
    }
    const resaultImageProfile = await cloudinary.uploader.upload(ctx.request.file.path);
    return await userModel.create({
      name,
      email,
      username,
      password: hash,
      image_profile: resaultImageProfile.secure_url || null,
      cloudinari_id: resaultImageProfile.public_id || null,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = async (ctx) => {
  const { email, password } = ctx.request.body;

  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    ctx.status = 404;
    return (ctx.body = {
      message: `email: ${email} is wrong email`,
    });
  }
  const match = bcrypt.compareSync(password, findUser.password);

  if (!match) {
    ctx.status = 400;
    return (ctx.body = {
      message: "worng password",
    });
  }

  const token = jwt.sign(
    {
      uuid: findUser._id,
      name: findUser.name,
      username: findUser.username,
      email: findUser.email,
      image_proilfe: findUser.image_profile || null,
    },
    "seccret"
  );

  if (!token) {
    ctx.status = 403;
  }

  ctx.cookies.set("token", token);
  ctx.user = token;

  return (ctx.body = { token });
};

export const getUserAll = async () => {
  return await userModel.find();
};

export const deleteUser = async (ctx) => {
  const { id } = ctx.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (ctx) => {
  const { id } = ctx.params;
  const { name, email, username, image_profile } = ctx.request.body;
  try {
    const user = await userModel.findByIdAndUpdate(id, {
      name,
      email,
      username,
      image_profile,
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

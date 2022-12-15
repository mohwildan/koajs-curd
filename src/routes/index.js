import Router from "koa-router";
import multer from "../middelware/multer.js";
import {
  createCommentHandler,
  deleteCommentHandler,
  getCommentByIdHandler,
  getCommentHandler,
  updateCommentHandler,
} from "../controllers/comment.controller.js";
import { createLikeHandler, deleteLikeHandler } from "../controllers/like.controller.js";
import {
  createPostHandler,
  deletePostHandler,
  getPostByIdHandler,
  getPostHandler,
  updatePostByIdHandler,
} from "../controllers/post.controller.js";
import {
  registerUserHandler,
  loginUserHandler,
  getUserHandler,
  deleteUserHandler,
  getUserAllHandler,
  updateUserHandler,
} from "../controllers/user.controler.js";
import userValidation from "../middelware/userValidation.js";

const route = new Router();

// middelware user auth
route.use(["/api/user"], userValidation);

//middelware user profile
route.use(["/api/register"], multer.single("image"));

//login and register user
route.post("/api/register", registerUserHandler);
route.post("/api/login", loginUserHandler);
//my user
route.get("/api/user", getUserHandler);
route.put("/api/user/:id", updateUserHandler);
route.get("/api/user/all", getUserAllHandler);
route.delete("/api/user/:id", deleteUserHandler);
//post by users
route.post("/api/post", createPostHandler);
route.get("/api/post", getPostHandler);
route.get("/api/post/:id", getPostByIdHandler);
route.delete("/api/post/:id", deletePostHandler);
route.put("/api/post/:id", updatePostByIdHandler);
//comment in post
route.post("/api/comment", createCommentHandler);
route.get("/api/comment/:id", getCommentByIdHandler);
route.get("/api/comment", getCommentHandler);
route.delete("/api/comment/:id", deleteCommentHandler);
route.put("/api/comment/:id", updateCommentHandler);
//like in post
route.post("/api/like", createLikeHandler);
route.put("/api/like/:id", deleteLikeHandler)

export default route;

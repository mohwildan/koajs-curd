import Router from "koa-router";
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
} from "../controllers/user.controler.js";
import userValidation from "../middelware/userValidation.js";

const route = new Router();

// middelware user auth
route.use(["/api/user"], userValidation);

route.post("/api/register", registerUserHandler);
route.post("/api/login", loginUserHandler);
route.get("/api/user", getUserHandler);
route.get("/api/user/all", getUserAllHandler);
route.delete("/api/user/:id", deleteUserHandler);
route.post("/api/post", createPostHandler);
route.get("/api/post", getPostHandler);
route.get("/api/post/:id", getPostByIdHandler);
route.delete("/api/post/:id", deletePostHandler);
route.put("/api/post/:id", updatePostByIdHandler);

export default route;

import jwt from "jsonwebtoken";
const userValidatation = async (ctx, next) => {
  const token = ctx.cookies.get("token");
  if (!token) {
    ctx.status = 403;
    return (ctx.body = {
      message: "login dulu block",
    });
  }
  const user = jwt.decode(token);
  ctx.user = user;
  return next();
};

export default userValidatation;

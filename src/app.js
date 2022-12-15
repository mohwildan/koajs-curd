import dotEnv from "dotenv";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { koaBody } from "koa-body"
import route from "./routes/index.js";
import connectionDatabase from "./utils/connectionDatabase.js";

dotEnv.config();
const app = new Koa();
const port = process.env.PORT || 3000;
app.use(koaBody({
  urlencoded: true,
}))
app.use(route.routes()).use(route.allowedMethods());

app.listen(port, () => {
  console.log(`your app run in http://localhost:${port}`);
  connectionDatabase();
});

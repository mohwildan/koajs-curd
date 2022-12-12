import dotEnv from "dotenv";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import route from "./routes/index.js";
import connectionDatabase from "./utils/connectionDatabase.js";

dotEnv.config();
const app = new Koa();
const port = process.env.PORT || 3000;
app.use(bodyParser());
app.use(route.routes()).use(route.allowedMethods());

app.listen(port, async () => {
  console.log(`your app run in http://localhost:${port}`);
  connectionDatabase();
});

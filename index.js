// 9. RESTful API 最佳实践 ---- 增删改查，返回正确的响应
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const usersRouter = new Router({prefix: "/users"});

router.get("/", ctx => {
  ctx.body = "这是index页面";
});

usersRouter.get("/", ctx => {
  ctx.body = [{name: "李雷"}, {name: "韩梅梅"}];
});

usersRouter.post("/", ctx => {
  ctx.body = {name: "李雷"};
});

usersRouter.get("/:id", ctx => {
  ctx.body = {name: "李雷"};
});

usersRouter.put("/:id", ctx => {
  ctx.body = {name: "李雷2"};
});

usersRouter.delete("/:id", ctx => {
  ctx.status = 204;
});

app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.listen(3000);

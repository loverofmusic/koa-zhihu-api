// 8. 安装 koa-router，使用 koa-router 完成路由基本功能以及高级功能
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const usersRouter = new Router({prefix: "/users"});

router.get("/", ctx => {
  ctx.body = "这是index页面";
});

usersRouter.get("/", ctx => {
  ctx.body = "这是用户列表页面";
});

usersRouter.post("/", ctx => {
  ctx.body = "这是创建用户页面";
});

usersRouter.get("/:id", ctx => {
  ctx.body = `这是用户${ctx.params.id}`;
});

app.use(router.routes());
app.use(usersRouter.routes());

app.listen(3000);

// 9. RESTful API 最佳实践 ---- 增删改查，返回正确的响应
const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const usersRouter = new Router({prefix: "/users"});

const db = [{name: "张聪"}];

router.get("/", ctx => {
  ctx.body = "这是index页面";
});

//获取所有用户数据
usersRouter.get("/", ctx => {
  // ctx.set("Allow", "GET, POST")
  ctx.body = db;
});

//新建用户
usersRouter.post("/", ctx => {
  db.push(ctx.request.body)
  ctx.body = ctx.request.body;
});

//获取特定用户
usersRouter.get("/:id", ctx => {
  ctx.body = db[ctx.params.id * 1];
});

//修改特定用户
usersRouter.put("/:id", ctx => {
  db[ctx.params.id * 1] = ctx.request.body
  ctx.body = ctx.request.body;
});

//删除特定用户
usersRouter.delete("/:id", ctx => {
  db.splice(ctx.params.id * 1, 1);
  ctx.status = 204;
});

app.use(router.routes());
app.use(bodyparser());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.listen(3000);

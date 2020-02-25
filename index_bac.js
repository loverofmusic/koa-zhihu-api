// 6. async await 编写koa中间件，理解中间件执行顺序-洋葱模型
const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
  ctx.body = "理解中间件执行顺序--洋葱模型";
});

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});

app.use(ctx => {
  console.log(5);
});

app.listen(3000);

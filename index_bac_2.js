// 7. 理解路由存在的意义，编写koa路由中间件
const Koa = require("koa");

const app = new Koa();

app.use(async ctx => {
  if (ctx.url === "/") {
    ctx.body = "这是主页";
  } else if (ctx.url === "/users") {
    if (ctx.method === "GET") {
      ctx.body = "这是用户列表页";
    } else if (ctx.method === "POST") {
      ctx.body = "创建用户";
    } else {
      ctx.status = 405;
      // 405 Method Not Allowed 表明服务器禁止了使用当前 HTTP 方法的请求。
      // 需要注意的是,GET 与 HEAD 两个方法不得被禁止,当然也不得返回状态码 405
    }
  } else if (ctx.url.match(/\/users\/\w+/)) {
    const userId = ctx.url.match(/\/users\/(\w+)/)[1];
    ctx.body = `这是用户 ${userId}`;
  } else {
    ctx.status = "这是用户列表页";
  }
});

app.listen(3000);

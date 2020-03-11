const Router = require("koa-router");
const router = new Router({ prefix: "/users" });
const { find, findById, create, update, delete: del, login, checkOwner} = require("../controllers/users");

const { secret } = require("../config");

//koa-jwt 身份认证中间件
// const jwt = require("koa-jwt");
// const auth = jwt({ secret });

//手写 身份认证中间件
const jsonwebtoken = require("jsonwebtoken");
const auth = async (ctx, next) => {
  const { authorization = "" } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");
  try {
    const user = jsonwebtoken.verify(token, secret);
    ctx.state.user = user;
  } catch (err) {
    ctx.throw(401, err.message);
  }
  await next();
};

//获取所有用户数据
router.get("/", find);

//新建用户
router.post("/", create);

//获取特定用户
router.get("/:id", findById);

//修改特定用户
router.patch("/:id", auth, checkOwner, update);

//删除特定用户
router.delete("/:id", auth, checkOwner, del);

//登录
router.post("/login", login);

module.exports = router;

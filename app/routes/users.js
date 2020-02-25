const Router = require("koa-router");
const router = new Router({prefix: "/users"});
const {find, findById, create, update, delete: del} = require("../controllers/users");


//获取所有用户数据
router.get("/", find);

//新建用户
router.post("/", create);

//获取特定用户
router.get("/:id", findById);

//修改特定用户
router.put("/:id", update);

//删除特定用户
router.delete("/:id", del);

module.exports = router;
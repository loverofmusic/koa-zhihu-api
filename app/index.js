const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");

const routing = require("./routes");

app.use(bodyparser());
routing(app)

app.listen(3000, ()=>console.log("app running at 3000 port"));

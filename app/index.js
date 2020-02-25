const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const error = require("koa-json-error");
const parameter = require("koa-parameter");

const routing = require("./routes");

app.use(error({
  postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
}));
app.use(bodyparser());
app.use(parameter(app));
routing(app)

app.listen(3000, ()=>console.log("app running at 3000 port"));

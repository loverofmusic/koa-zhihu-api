const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const error = require("koa-json-error");
const parameter = require("koa-parameter");
const mongoose = require("mongoose");
const routing = require("./routes");
const {connectionStr} = require("./config")

mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log("mongodb 连接成功了")
})

mongoose.connection.on('error', () => {
  console.log("连接失败", error);
})


app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
  })
);
app.use(bodyparser());
app.use(parameter(app));
routing(app);

app.listen(3000, () => console.log("app running at 3000 port"));

const Koa = require("koa");

const app = new Koa();

app.use((ctx)=>{
  console.log(5555)
})

app.listen("http://localhost:3000");
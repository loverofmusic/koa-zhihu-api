class HomeCtl {
  index(ctx){
    ctx.body = "这是shou页面";
  }
}
module.exports = new HomeCtl();
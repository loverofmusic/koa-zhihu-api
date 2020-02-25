const fs = require("fs");

module.exports = (app) => {
  // console.log(__dirname)
  fs.readdirSync(__dirname).forEach(file => {
    // console.log(file)
    if (file === "index.js"){
      return;
    }
    const router = require(`./${file}`);
    app.use(router.routes()).use(router.allowedMethods());
  })
}
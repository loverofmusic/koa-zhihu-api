# koa-zhihu-api
Koa 编写仿知乎 API

### 迭代过程
1. 初始化项目
#### npm init => package.json

2. 安装 Koa
#### npm i koa --save

3. 实例化 koa，编写 hello world，运行 node index.js 测试

4. 安装 node 自动重启工具 nodemon 
#### npm i nodemon --save-dev

5. scripts 添加 nodemon 启动脚本
#### npm run start

6. async await 编写koa中间件，理解中间件执行顺序-洋葱模型

7. 理解路由存在的意义，编写koa路由中间件

+ 处理不同的 URL
+ 处理不同的 HTTP 方法
+ 解析 URL 上的参数

8. 安装 koa-router，使用 koa-router 完成路由基本功能以及高级功能
#### npm i koa-router --save-dev

9. RESTful API 最佳实践 ---- 增删改查，返回正确的响应

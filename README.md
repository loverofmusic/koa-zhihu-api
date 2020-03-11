# koa-zhihu-api
Koa 编写 仿知乎 API

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

10. 获取 HTTP 请求参数：

+ Query String(可选)，如 ?q=keyword
+ Router Params（必须）, 如 /users/:id
+ Body，如{name: "xxx"}
+ Header，如 Accept，Cookie

  10.1 安装 koa-bodyparser：
  #### npm i koa-bodyparser --save

  10.2 步骤：
  + 断点调试
  + 获取 query
  + 获取 router params
  + 获取 body
  + 获取 header

11. 发送 HTTP 响应：

+ 发送 Status，如 200/400 等
+ 发送 Body，如{name: "xxx"}
+ 发送 Header，如Allow，Content-Type

  11.1 步骤：
  + 发送 Status
  + 发送 Body
  + 发送 Header
  + 实现 增删改查， 通过 Postman 测试

12. 编写 控制器 最佳实践：

+ 每个资源的控制器放在不同的文件里
+ 尽量使用 类+类方法 的形式编写控制器
+ 严谨的错误处理

  12.1 步骤：
  + 将路由单独放在一个目录
  + 将控制器单独放在一个目录
  
13. 使用 koa-error-json 进行错误处理
  #### npm i koa-error-json --save
  安装跨平台环境变量利器 
  #### npm i cross-env --save-dev

14. 使用 koa-parameter 进行参数校验
  #### npm i koa-parameter --save

15. 使用mongoose连接数据库
#### npm i mongoose --save

16. 分析用户模块schema，使用schema生成用户model

17. mongodb实现用户增删改查

18. 安装 jsonwebtoken 做注册登录鉴权
#### npm i jsonwebtoken --save

19. 实现注册，用户名必须有，用户名不能重复 密码必须有，密码不能返回

20. 实现登录并获取 token

21. 用koa-jwt中间件实现用户认证与授权

22. 文件上传 使用 koa-body 替换 koa-bodyparser
#### npm i koa-body --save

23. 设置 图片上传目录

24. 使用 postman 上传文件

25. 安装 koa-static 设置静态文件目录 生成图片链接

26. 个人资料 schema 设计

27. 个人资料参数校验

28. ?fields=educations&locations 查看用户 字段过滤
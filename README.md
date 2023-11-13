### next 基础

#### 渲染方式
1. 客户端渲染： 使用react18 客户端组件
2. 服务端渲染 next.js 服务端组件
   - 一个页面中可以有服务端组件和客户端组件
   - 优先使用服务端组件，需要交互的组件使用客户端组件

#### 路由系统
1. App router(推荐)
- 创建出来的项目中 app目录下有两个文件，page.tsx 和 layout.tsx **是app路由方式下两个特殊的文件**
- page.tsx: 当前访问网页的独立内容。
- layout.tsx: 当前网页和子路径网页的共享内容。
- **最终的页面是有 page.tsx 和 layout.tsx 组合生成的内容**
- 添加新的页面 如添加新的chat 页面 默认的页面名称为page.xxx(App Router模式默认的)  页面看的内容也是chat/page.tsx 和layout.tsx 组合而成的页面
- 通过metaData来修改页面标题
- 每一个理由页面都可以添加一个layout.tsx; 除了根目录下的layout 其他目录下的layout 是非必要的(还有其他的组件)

2. Pages Router

#### 修改页面标题

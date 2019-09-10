## and-mobile在create-react-app中的使用
- create-react-app 初始化与安装
  ```
   npm install -g create-react-app
   create-react-app my-app
   cd my-app
   npm start
  ```

- and-mobile需要修改配置：

1、安装react-app-rewired（一个对 create-react-app 进行自定义配置的社区解决方案）

```
npm install --save-dev react-app-rewired
```

2、安装customize-cra（必不可少，eact-app-rewired删除所有方法的新版本injectBabelPlugin。
这些方法被移动到一个名为'customize-cra'的新包中，这取决于react-app-rewired@2.x。）
```
 npm install --save-dev customize-cra
```
3、修改package.json启动项

```
/* package.json */
'scripts': {
  'start': 'react-app-rewired start',
  'build': 'react-app-rewired build',
  'test': 'react-app-rewired test --env=jsdom',
}
```
4、在项目根目录创建一个 config-overrides.js 用于修改默认配置。
```
  module.exports = function override(config, env) {
    return config
  }
```

5、使用babel-plugin-import实现antd or antd-mobile按需加载，修改config-overrides.js
```
npm install --save-dev babel-plugin-import
```

6、使用react-app-rewire-less配置Less

```
npm install --save-dev react-app-rewire-less
```

```
/* config-overrides.js */
module.exports = override( 
    fixBabelImports("babel-plugin-import", {
        libraryName: "antd-mobile",
        style: true
    }),
    addLessLoader({
        ident: 'postcss'
    })
);
```

7、安装依赖 antd-mobile UI库
```
npm install antd-mobile —save
```

8、配置文件按需加载用到的组件（注：官方推荐两种方法，能开项目中目前没搞清楚用的什么）
    
        libraryName: 'antd-mobile’,      // 注入依赖的名字
        style: true,                                 // 会加载less文件（style：css会加载css文件）
  注：在项目里设置的是加载less文件，所以项目中需要安装less和less-loader
```
npm install --save-dev less-loader less
```

9、less不生效解决办法，找到node_modules里react-script/config/webpack.config.js

-- 添加
```
const lessRegex =/\.less$/;
const lessModuleRegex=/\.module\.less$/;

{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders({
    importLoaders: 2,
    sourceMap: isEnvProduction && shouldUseSourceMap,
  }),
  sideEffects: true
},
{
  test: lessModuleRegex,
  use: getStyleLoaders({
    importLoaders: 2,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent,
    sourceMap: isEnvProduction && shouldUseSourceMap,
  })
},
```

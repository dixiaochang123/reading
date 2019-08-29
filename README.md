## and-mobile在create-react-app中的使用
- create-react-app初始化与安装
  ```
   npm install -g create-react-app
   create-react-app my-app
   cd my-app
   npm start
  ```

- 说明在Create-react-app中使用Antd需要修改配置的的方式：

一、方案一
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
二、方案二

npm run eject 暴露所有内建的配置

1、使用babel-plugin-import实现Antd按需加载，修改package.json，或者在项目根目录新建文件.babelrc写配置，注意是二选一。
```
npm install --save-dev babel-plugin-import
```
**   修改package.json
```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": true
        }
      ]
    ]
  },
  "devDependencies": {
    "babel-plugin-import": "^1.11.0"
  }
  ```

***   .babelrc
```
{
   "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": true
        }
      ]
    ]
}
```

注意： 不要认为package.json里已有presets配置这里就不用写，这里的.babelrc会覆盖package.json里带有的babel配置，如果删除presets配置，会报错。

### 能开项目中antd-mobile的使用总结

1、首先安装依赖
      $ npm install antd-mobile —save

2、配置文件按需加载用到的组件（注：官方推荐两种方法，能开项目中目前没搞清楚用的什么）
    
        libraryName: 'antd-mobile’,      // 注入依赖的名字
        style: true,                                 // 会加载less文件（style：css会加载css文件）
  注：在项目里设置的是加载less文件，所以项目中需要安装less和less-loader
 安装：npm install --save-dev less-loader less
 配置：

3、具体应用

注意：在用到相关antd-mobile的组件时，一定要在对应组件外套一个具有唯一性class名的div,当组件样式不满足需求时，修改相应组件样式需在该类名之类，根据less的编译方法以及套用，不能直接以该组件的class名直接开始修改，这样会导致该样式污染全局

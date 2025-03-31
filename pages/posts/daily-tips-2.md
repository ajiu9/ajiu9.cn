---
title: "日常工作小技巧和问题集（2）"
lang: zh
date: 2025-03-31T00:00:00Z
type: blog
---

1. `vscode 搜索文件目录名称`

鼠标点一下文件夹目录之后直接输入想要搜索的文件就可以高亮显示

2. `在rollup构建中： createRequire(import.meta.url)`

使用esbuild插件构建默认配置:

```json
{
  "target": "esnext"
}
```

会生成
var node_module = require('node:module');
const require$1 = node_module.createRequire((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(\_\_filename).href : (\_documentCurrentScript && \_documentCurrentScript.src || new URL('obsiflow.cjs.prod.js', document.baseURI).href)));

使用：

```json
{
  "target": "es2019"
}
```

const require$1 = node_module.createRequire(import_meta.url);

3. `代码中使用vuex时，使用computed时，不会触发更新，会造成bug原因`

```js
// 使用  const serviceBill = computed(() => store.state.serviceBill)

this.$store.commit('setData', {
  key: 'serviceBill',
  value: this.serviceBill
})

Vue.prototype.$store = new Vuex.Store({
  state: {
    saveReceive: {
      roomID: '',
      roomName: ''
    }
  },
  mutations: {
    setData(state, obj) {
      //  原 state[obj.key] = obj.value
      //  当值是对象时，更新监听不到值
      // 使用computed时，不会触发更新，会造成bug
      Vue.set(state, obj.key, obj.value)
    }
  }
})
```

4. `vscode 中，typeScript 类型使用代码重构功能移动到新文件typeScript 5.4.5版本才支持移动到新文件`

5. `el-form 表单校验问题： 当使用rules时，form表单字段中有使用v-if，当开始条件为false，又使用了vue.$set重新动态绑定，会造成rules失效。
初步判断应该是动态绑定和el-form的校验改变了引用，造成失效。`

6. `loadSource方法在dev模式下是浅拷贝，生产环境才是`

7.` 在 vscode中, debugger 使用的默认node版本和terminal中的不一定相同，更改的方法有两种：`

在 vscode中, 修改设置：

environment-variables

```json
{
  "terminal.integrated.env.osx": {
    "remoteEnv": "${containerEnv:PATH}:/some/other/path"
  }
}
```

在项目中配置：
在.vscode/launch.json 中配置preLaunchTask

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}"
      ],
      "outFiles": [
        "${workspaceFolder}/dist/**/*.js"
      ],
      "preLaunchTask": "use nvm && pnpm run dev"
    }
  ]
}
```

然后新建一个tasks.json来切换node版本

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "use nvm && pnpm run dev",
      "type": "shell",
      "command": "zsh -i -c 'nvm use 20.11.0 && pnpm run dev'",
      "isBackground": true,
      "presentation": {
        "reveal": "never"
      },
      "problemMatcher": [
        {
          "owner": "typescript",
          "fileLocation": "absolute",
          "pattern": {
            "regexp": "^(.*):(\\d+):(\\d+) - (error|warning): (.*)$",
            "file": 1,
            "line": 2,
            "column": 3,
            "severity": 4,
            "message": 5
          },
          "background": {
            "activeOnStart": true,
            "beginsPattern": "Build start",
            "endsPattern": "Build success"
          }
        }
      ],
      "group": "build"
    }
  ]
}
```

8. `在 js项目中，禁用ts-plugins`

vue插件使用官方的Vue-official,这个插件使用的是vscode内置的ts-plugin,如果在js项目中不需要ts类型提示，可以禁用掉。

在左侧的Extensions选项卡(Ctrl+Shift+X)中，搜索@builtin typescript-language-features，然后单击Extension旁边的小齿轮图标，然后单击Disable。

9. `Node.js 20 全局设置旧版 OpenSSL 提供程序以避免加密错误`

`问题背景`
在使用 Node.js 20 时，可能会遇到 digital envelope routines::unsupported 错误，这是由于 Node.js 20 默认采用了更严格的加密策略，部分旧项目依赖的加密算法在新版本中可能不被支持。而 Node.js 16 通常不会出现此问题。为解决该问题，可全局设置让 Node.js 20 使用旧版 OpenSSL 提供程序。

`解决方案`

Windows 系统

batch

```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

macOS 系统

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

---
title: 更改VSCode环境变量
lang: zh
date: 2025-02-17T00:00:00Z
type: note
---

在 vscode中, debugger 使用的默认node版本和terminal中的不一定相同，更改的方法有两种：

1. 在 vscode中, 修改设置：

[environment-variables](https://code.visualstudio.com/remote/advancedcontainers/environment-variables)

```json
{
  "terminal.integrated.env.osx": {
    "remoteEnv": "${containerEnv:PATH}:/some/other/path"
  }
}
```

2. 在项目中配置：
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

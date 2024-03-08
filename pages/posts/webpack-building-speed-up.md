---
title: 前端webpack构建提速
date: 2023-01-04T00:00:00Z
lang: zh
type: blog
---

1.使用speed-measure-webpack-plugin进行速度分析

```javascript
// 安装
npm install --save-dev speed-measure-webpack-plugin
// 使用方式
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const webpackConfig = smp.wrap({
  plugins: [
    new MyPlugin(),
    new MyOtherPlugin()
  ]
});
```

2. 使用webpack-bundle-analyzer进行体积分析

```javascript
// 安装
npm install --save-dev webpack-bundle-analyzer
// 使用
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
 plugins: [
   new BundleAnalyzerPlugin()
 ]
}
```

3. 使用多进程、多实例构建
   > 使用[thread-loader](https://webpack.js.org/loaders/thread-loader/): 每次 webpack 解析一个模块，thread-loader 会将它及它的依赖分配给 worker 线程中

```javascript
// webpack.config.js
const os = require('os')
const threads = os.cpus().length
console.info('编译线程数 => ', threads)
module.exports = {
  config.module
    .rule('vue')
    .use('thread-loader')
    .loader('thread-loader')
    .options({
      workers: threads
    })
    .end()
  config.module
    .rule('js')
    .use('thread-loader')
    .loader('thread-loader')
    .options({
      workers: threads
    })
    .end()
};
```

4. 利用缓存提升二次构建速度
   > [bable-loader](https://webpack.js.org/configuration/cache/#cachetype)提供了一个参数来使用缓存, 有false,memory, filesystem等配置

```javascript
module.exports = {
  //...
  cache: {
    type: 'filesystem',
  },
};
```

5. 在webpack构建过程中移除无用的css代码方式
   > [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)此插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持CSS和SourceMaps的按需加载。
   > 它建立在新的webpack v5功能之上，需要webpack 5才能工作。

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
```

6.对图片进行优化

> 使用[ruleparserdataurlcondition](https://webpack.js.org/configuration/module/#ruleparserdataurlcondition)减少http请求

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },
};
```

7.在生产构建时，使用代码拆分、splitChunks优化

> [optimization](https://webpack.js.org/configuration/optimization/)开启minimize： true, 配置[splitChunks](https://webpack.js.org/configuration/optimization/#optimizationsplitchunks)来拆分合并代码，优化生产环境的代码，对常用的公用代码使用CDN
> [webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)
> 比如对第二步中使用webpack-bundle-analyzer进行体积分析后得到的优化建议，可以配置一下代码来进行优化

```javascript
module.exports = {
splitChunks: {
      chunks: 'async',
      minChunks: 1,
      maxInitialRequests: 30,
      minSize: 0,
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        },
        coreJs: {
          chunks: 'all',
          name: 'lib.core-js',
          test: /[\\/]node_modules[\\/]core-js[\\/]/
        },
        axios: {
          chunks: 'all',
          name: 'lib.axios',
          test: /[\\/]node_modules[\\/](axios|axios-ex)[\\/]/
        },
        handsontable: {
          chunks: 'all',
          name: 'lib.handsontable',
          test: /[\\/]node_modules[\\/](handsontable|@handsontable)[\\/]/
        },
        lodash: {
          chunks: 'all',
          name: 'lib.lodash',
          test: /[\\/]node_modules[\\/]lodash[\\/]/
        },
        moment: {
          chunks: 'all',
          name: 'lib.moment',
          test: /[\\/]node_modules[\\/]moment[\\/]/
        },
        i18n: {
          chunks: 'all',
          name: 'lib.i18n',
          test: /[\\/]node_modules[\\/]vue-i18n[\\/]/
        },
        common: {
          chunks: 'all',
          name: 'lib.common',
          priority: 0,
          test(module) {
            const includes = [
              'intro.js',
              'countup.js',
              'qs',
              'node-rsa',
              'vue-grid-layout'
            ]
            return (
              module.resource &&
              includes.some(pkg =>
                module.resource.includes(
                  `${sep}node_modules${sep}${pkg}${sep}`
                )
              )
            )
          }
        }
      }
    }
}
```

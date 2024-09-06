/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...404]': RouteRecordInfo<'/[...404]', '/:404(.*)', { 404: ParamValue<true> }, { 404: ParamValue<false> }>,
    '/bookmarks': RouteRecordInfo<'/bookmarks', '/bookmarks', Record<never, never>, Record<never, never>>,
    '/notes': RouteRecordInfo<'/notes', '/notes', Record<never, never>, Record<never, never>>,
    '/photos': RouteRecordInfo<'/photos', '/photos', Record<never, never>, Record<never, never>>,
    '/posts/': RouteRecordInfo<'/posts/', '/posts', Record<never, never>, Record<never, never>>,
    '/posts/are-you-a-morning-bird-or-a-night-owl': RouteRecordInfo<'/posts/are-you-a-morning-bird-or-a-night-owl', '/posts/are-you-a-morning-bird-or-a-night-owl', Record<never, never>, Record<never, never>>,
    '/posts/browser-rendering-mechanism': RouteRecordInfo<'/posts/browser-rendering-mechanism', '/posts/browser-rendering-mechanism', Record<never, never>, Record<never, never>>,
    '/posts/common-shortcuts-for-vscode': RouteRecordInfo<'/posts/common-shortcuts-for-vscode', '/posts/common-shortcuts-for-vscode', Record<never, never>, Record<never, never>>,
    '/posts/configure-my-Mac-from-0': RouteRecordInfo<'/posts/configure-my-Mac-from-0', '/posts/configure-my-Mac-from-0', Record<never, never>, Record<never, never>>,
    '/posts/construction-and-use-of-picture-bed': RouteRecordInfo<'/posts/construction-and-use-of-picture-bed', '/posts/construction-and-use-of-picture-bed', Record<never, never>, Record<never, never>>,
    '/posts/constructor-instance-prototype-chain': RouteRecordInfo<'/posts/constructor-instance-prototype-chain', '/posts/constructor-instance-prototype-chain', Record<never, never>, Record<never, never>>,
    '/posts/cross-domain-methods': RouteRecordInfo<'/posts/cross-domain-methods', '/posts/cross-domain-methods', Record<never, never>, Record<never, never>>,
    '/posts/csrf-xss': RouteRecordInfo<'/posts/csrf-xss', '/posts/csrf-xss', Record<never, never>, Record<never, never>>,
    '/posts/css-box-model-and-margin-overlap-solution': RouteRecordInfo<'/posts/css-box-model-and-margin-overlap-solution', '/posts/css-box-model-and-margin-overlap-solution', Record<never, never>, Record<never, never>>,
    '/posts/daily-tips-1': RouteRecordInfo<'/posts/daily-tips-1', '/posts/daily-tips-1', Record<never, never>, Record<never, never>>,
    '/posts/directive-number': RouteRecordInfo<'/posts/directive-number', '/posts/directive-number', Record<never, never>, Record<never, never>>,
    '/posts/dom-event': RouteRecordInfo<'/posts/dom-event', '/posts/dom-event', Record<never, never>, Record<never, never>>,
    '/posts/front-end-error-monitoring': RouteRecordInfo<'/posts/front-end-error-monitoring', '/posts/front-end-error-monitoring', Record<never, never>, Record<never, never>>,
    '/posts/how-to-achieve-a-deep-copy': RouteRecordInfo<'/posts/how-to-achieve-a-deep-copy', '/posts/how-to-achieve-a-deep-copy', Record<never, never>, Record<never, never>>,
    '/posts/how-to-debug-local-code-in-WeChat-development-tools': RouteRecordInfo<'/posts/how-to-debug-local-code-in-WeChat-development-tools', '/posts/how-to-debug-local-code-in-WeChat-development-tools', Record<never, never>, Record<never, never>>,
    '/posts/how-to-determine-the-plan': RouteRecordInfo<'/posts/how-to-determine-the-plan', '/posts/how-to-determine-the-plan', Record<never, never>, Record<never, never>>,
    '/posts/http-protocol-class': RouteRecordInfo<'/posts/http-protocol-class', '/posts/http-protocol-class', Record<never, never>, Record<never, never>>,
    '/posts/javascript-data-type': RouteRecordInfo<'/posts/javascript-data-type', '/posts/javascript-data-type', Record<never, never>, Record<never, never>>,
    '/posts/js-type-about-type-and-Reference': RouteRecordInfo<'/posts/js-type-about-type-and-Reference', '/posts/js-type-about-type-and-Reference', Record<never, never>, Record<never, never>>,
    '/posts/lodash-webpack-plugin-problem': RouteRecordInfo<'/posts/lodash-webpack-plugin-problem', '/posts/lodash-webpack-plugin-problem', Record<never, never>, Record<never, never>>,
    '/posts/map-set-array-object': RouteRecordInfo<'/posts/map-set-array-object', '/posts/map-set-array-object', Record<never, never>, Record<never, never>>,
    '/posts/match-chinese-characters': RouteRecordInfo<'/posts/match-chinese-characters', '/posts/match-chinese-characters', Record<never, never>, Record<never, never>>,
    '/posts/object-oriented-class-and-inheritance': RouteRecordInfo<'/posts/object-oriented-class-and-inheritance', '/posts/object-oriented-class-and-inheritance', Record<never, never>, Record<never, never>>,
    '/posts/page-layout-three-column': RouteRecordInfo<'/posts/page-layout-three-column', '/posts/page-layout-three-column', Record<never, never>, Record<never, never>>,
    '/posts/professional-thinking': RouteRecordInfo<'/posts/professional-thinking', '/posts/professional-thinking', Record<never, never>, Record<never, never>>,
    '/posts/proxy-reflect': RouteRecordInfo<'/posts/proxy-reflect', '/posts/proxy-reflect', Record<never, never>, Record<never, never>>,
    '/posts/publish-esm-and-cjs': RouteRecordInfo<'/posts/publish-esm-and-cjs', '/posts/publish-esm-and-cjs', Record<never, never>, Record<never, never>>,
    '/posts/use-search': RouteRecordInfo<'/posts/use-search', '/posts/use-search', Record<never, never>, Record<never, never>>,
    '/posts/webpack-building-speed-up': RouteRecordInfo<'/posts/webpack-building-speed-up', '/posts/webpack-building-speed-up', Record<never, never>, Record<never, never>>,
    '/posts/window-print': RouteRecordInfo<'/posts/window-print', '/posts/window-print', Record<never, never>, Record<never, never>>,
    '/projects': RouteRecordInfo<'/projects', '/projects', Record<never, never>, Record<never, never>>,
  }
}

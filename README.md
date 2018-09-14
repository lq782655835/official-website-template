# official-website-template

quickly created an official website with seo

## Compatibility

- [x] code standard：eslint + stylelint + perttier

- [x] commit standard：commitlint + husky

- [x] css： scss + scss resource

- [x] vue: vue-router + vuex + axios

- [x] component

   - [x] light component： link + button + icon + input + modal + select + tabs

   - [x] layout component： header + footer

   - [x] plugins：vue-awesome-swiper

- [ ] animation lib： wow.js

## Usage

### Install vue-cli

``` shell
$ npm install -g vue-cli
```

### Quick Start

``` shell
$ vue init lq782655835/official-website-template my-project
$ cd my-project
$ npm install && npm run dev
```

## Directory Structure

<pre>
|-- official-website-template
    |-- nuxt.config.js                   -- nuxt配置
    |-- package.json                     -- 项目依赖以及npm脚本
    |-- assets
    |   |-- css                          -- scss
    |   |   |-- global.scss              -- 全局css
    |   |   |-- reset.scss               -- reset css
    |   |   |-- variables.scss           -- 全局scss变量或mixin
    |   |-- img                          -- 图片存放，icon组件会默认找到该文件夹
    |   |-- svg                          -- svg存放，icon组件会默认找到该文件夹
    |-- components                       -- 组件
    |   |-- u-footer.vue                 -- 页尾布局占位
    |   |-- u-header.vue                 -- 页头导航占位
    |   |-- common                       -- 全局Vue组件，该文件夹下的组件自动导入，文件名为组件名
    |   |   |-- u-banner.vue             -- 轮播组件
    |   |   |-- u-button.vue
    |   |   |-- u-icon.vue               -- 提供快捷本地图片访问
    |   |   |-- u-input.vue
    |   |   |-- u-link.vue               -- 统一站内/站外导航组件
    |   |   |-- u-modal.vue
    |   |   |-- u-section.vue
    |   |   |-- u-select-option.vue
    |   |   |-- u-select.vue
    |   |   |-- u-tab.vue
    |   |   |-- u-tabs.vue
    |   |-- index                        -- 页面逻辑组件
    |-- layouts                          -- Nuxt结构，全局模板
    |   |-- default.vue
    |-- pages                            -- Nuxt结构，页面路由route
    |   |-- index.vue
    |-- plugins                          -- Nuxt结构，插件
    |   |-- third.js                     -- 第三方插件导入
    |   |-- vue-global.js                -- vue全局导入
    |-- static                           -- Nuxt结构，静态文件
    |   |-- favicon.ico
    |-- store                            -- Nuxt结构，Vuex
    |   |-- index.js
    |-- utils                            -- 工具库
        |-- api.js                       -- api层
        |-- http.js                      -- 基础http请求
</pre>

## Preview

![image](https://user-images.githubusercontent.com/6310131/43903660-82273760-9c1f-11e8-9a48-797902189415.png)

![image](https://user-images.githubusercontent.com/6310131/43903750-ae125b5c-9c1f-11e8-9077-dafd07892ce8.png)

## License

The code is distributed under the [MIT](http://opensource.org/licenses/MIT) license
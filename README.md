# official-website-template

 > 为SEO的官网，定制初始模板，方便进行快速业务。基于nuxt框架，把一些官网项目中的痛点封装到脚手架中，防止重复开发。（快速开发中）

1. 开发规范：~~eslint~~ + stylelint + ~~perttier~~

1. 提交规范：~~commitlint（暂时不限制） + husky~~

1. css处理： ~~scss + scss resource~~

1. 组件 

   * 常用组件： ~~link + button + icon + input + section + modal + select + tabs~~

   * 布局组件： ~~header + footer~~

   * 第三方： slider

1. 动画库： wow.js

1. 请求层： ~~axios~~

1. 数据： ~~store~~

## 基本用法

### 安装vue-cli

``` shell
$ npm install -g vue-cli
```

### 安装项目

``` shell
$ vue init lq782655835/official-website-template my-project
$ cd my-project
$ npm install && npm run dev
```

## 官网基础组件库

> 以下部分不是谈论写一个组件库，而是从官网角度出发，考虑到官网样式各不一样，提出一些经常使用的基础组件，封装成轻量级，方便使用与修改。

## link

> SPA应用有站内链接(router-link)和站外链接(a)，应该对此进行统一，故由此组件。同时该组件也是button，icon组件的基础

```html
<u-link to="/demo">站内链接</u-link>
<u-link href="http:www.baidu.com" target="_blank">站外链接</u-link>
```

## button

> 官网中最常用组件之一。该组件除常规支持外，应该也支持link功能。

``` html
<u-button size='s' color='primary'>Button组件</u-button>
```

## icon

>在官网中，经常会使用到视觉给出的图片。图片种类也很丰富，有svg，png，gif等。图片大部分是有链接，有些不链接。所以很有必要对图片做统一处理。

## 轻量级input/select

## modal

## tab
# wshop

> a shop's home page made of vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:6060
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## the matters i conclude when developed
此demo页需要sass-loader  和  node-sass 共同工作
```
npm install sass-loader node-sass -D
```
配置除本地localhost之外的例如手机测试
```
在wenpack.config中添加 host:'本地IP（0.0.0.0）' 之后便可以利用本地‘IP+端口’来访问了
```
在vue中，在数据data中动态引用数据的时候，为了保证编译之后产品上线没有问题需要利用require去做，这样编译之后会对应找到正确的path
#结构说明
#### 1、index 是本地文件的入口
#### 2、src 存放的是源代码
#### 3、build 、 config 放的是webpack的配置文件
```
assets  -> 放的是静态的文件（图片、music 等）
components -> 放的是编写的组件，在项目中的各个部分都可以引用
page -> 组件接入口的文件
App.vue -> 这个是出口文件，对应 index
main.js -> 这个是全局的总文件，配置了全局的模式
router -> 这个是路由
style -> 这个是各个组件的以及公共的样式部分
```
#### 4、dist 放的是打包编译好的文件

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

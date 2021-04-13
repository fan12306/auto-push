'use strict'
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),  //src目录
            '@components': path.resolve(__dirname, 'src/components'),  // 组件
            '@common': path.resolve(__dirname, 'src/common'), // 公共文件
            '@pages': path.resolve(__dirname, 'src/pages'), // 页面
            '@static': path.resolve(__dirname, 'src/static'), // 静态资源
            '@router': path.resolve(__dirname, 'src/router'), // 路由
            '@store': path.resolve(__dirname, 'src/store'), // redux
        }
    }
}
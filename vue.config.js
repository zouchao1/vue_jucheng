const path = require('path')

function resolve(url) {
    return path.resolve(__dirname, url)
}

module.exports = {
    devServer: {

        port: 8000,
        proxy: {
            '/jucheng': {
                target: 'https://m.juooo.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/jucheng': ''
                }
            },
            '/mz': {
                target: 'https://m.maizuo.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/mz': ''
                }
            },
            '/bd': {
                target: 'https://api.map.baidu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/bd': ''
                }
            }

        }
    },
    chainWebpack(config) {
        config
            .resolve
            .alias // 配置解析别名
            .set('@components', resolve('src/components'))


    }

}
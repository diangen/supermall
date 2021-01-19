module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':"@/assets",
        'common':"@/common",
        'components':"@/components",
        'network':"@/network",
        'views':"@/views"
      }
    }
  },
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    // 注意下面 需要写入接口 ， 如果没有接口则进行注释即可
    proxy: { // 配置跨域
        '/api': {
            target: 'http://localhost:8080',	//接口域名
            ws: true,	//是否代理websockets
            changOrigin: true,	//是否跨域
            pathRewrite: {		//重置路径
                '^/api': 'http://localhost:8080'
            }
        }
    },
    before: app => { }
}
}


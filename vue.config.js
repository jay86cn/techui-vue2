
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir); 
module.exports = {
  //publicPath: '/devMode/',
  assetsDir: "static",
  devServer: {
    //open: true,
    // host:"127.0.0.1",
    //https: true,
    // port: 8081,
    // proxy: {
    //   "/api": {
    //     target: "",
    //     ws: true,
    //     changeOrigin: true,
    //     logLevel:"debug",
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // },
  },
  productionSourceMap: false, 
  chainWebpack: config => {
    config.resolve.alias
      .set('@static', resolve('public/static'))
      .set('@pub', resolve('public')) 
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "./node_modules/ayin-lessmixins/ayin-lessmixins.less"),
        path.resolve(__dirname, "./node_modules/ayin-color/ayin-color.less"),
        path.resolve(__dirname, "./node_modules/ayin-color/ayin-color-expand.less")
      ]
    }
  },
}
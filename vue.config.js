const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave:false,//关闭eslint检查
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: '<url>',
  //       ws: true,
  //       changeOrigin: true
  //     },
  //   }
  // }
}
)
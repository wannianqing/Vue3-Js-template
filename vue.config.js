const path = require('path')
module.exports = {
  lintOnSave:false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/styles/variable.scss";
          @import "~@/assets/styles/mixin.scss";
        `,
      },
    },
  },
  chainWebpack:(config)=>{
    config.plugin('define').tap(definitions=>{
      Object.assign(definitions[0],{
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__:'false'
      })
      return definitions
    })
  },
  configureWebpack:{
    resolve:{
      alias:{
        '@':path.resolve(__dirname,'src')
      }
    },
    plugins: [
      require('unplugin-auto-import/webpack').default({
        imports:['vue','vue-router','vuex']
      }),
    ],
  }
}
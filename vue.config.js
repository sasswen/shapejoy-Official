// const path = require('path');
// const PrerenderSPAPlugin = require("'prerender-spa-plugin'");

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'pro',
  outputDir: 'dist',
  chainWebpack: () => {},
  configureWebpack: () => {
    return {
      externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vue-amap': 'VueAMap',
        'vue-awesome-swiper': 'VueAwesomeSwiper'
      },
      // plugins: [
      //   new PrerenderSPAPlugin({
      //     // Required - The path to the webpack-outputted app to prerender.
      //     staticDir: path.join(__dirname, 'dist'),
      //     // Required - Routes to render.
      //     routes: ['/']
      //   })
      // ]
    };
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  parallel: require('os').cpus().length > 1
};

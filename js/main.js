var Vue = require('../node_modules/vue/dist/vue.common')
var App = require('./app.vue')
require('../node_modules/jquery/dist/jquery');
editor=Vue.component('app', {
   
    render: function (createElement) {
      return createElement(App)
    }
  })
module.exports=editor;  

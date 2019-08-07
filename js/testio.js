const compiler = require('vue-template-compiler');
k=compiler.parseComponent('t.vue', {'outputSourceRange': true})
fs=require('fs')
console.log( k);
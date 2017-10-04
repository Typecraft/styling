// Minimal http static server to display the styles on a small web page
var connect = require('connect')
var serveStatic = require('serve-static')
connect()
  .use(serveStatic(__dirname + "/public"))
  .use(serveStatic(__dirname + "/build"))
  .listen(6081, function(){
  console.log('Static server running on 6081')
})


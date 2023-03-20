const StaticServer = require('static-server');
let server = new StaticServer({
    rootPath: './dist',
    port: 8000
});
server.start(function(){
    console.log('Server Start At Port',server.port);
});
const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    console.log(req.url);
}).listen(port);
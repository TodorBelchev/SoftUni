const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'views' : '', req.url === '/' ? 'index.html' : req.url);
    let extName = path.extname(filePath);

    const contentTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.ico': 'image/x-icon'
    }
    let contentType = contentTypes[extName];

    fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
            console.log(err);
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });

}).listen(port);
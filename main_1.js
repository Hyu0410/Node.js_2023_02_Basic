var http = require('http');
var fs = require('fs');
var app = http.createServer((req, res) => {
    var url = req.url;
    if(req.url == '/'){
        url = '/html/index.html';
    }
    if(req.url == '/favicon.ico'){
        return res.writeHead(404);
    }
    
    res.writeHead(200);
    console.log(`__dirname + url: ${__dirname + url}`);
    res.end(fs.readFileSync(__dirname + url));
});
app.listen(3000, () => console.log('3000!'));
const express = require('express');
const app = express();
var urlm = require('url');

app.get('/', (req, res) => {
    var _url = req.url;
    var title = `Welcome`;
    var queryData = urlm.parse(_url, true).query;
    console.log(`queryData.id: ${queryData.id}`);
    var title = queryData.id;

    var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p>Test</p>
    </body>
    </html>`;
    res.send(template);
})

app.get('/favicon.ico', (req, res) => res.writeHead(404));
app.listen(3000, () => console.log('3000!'));

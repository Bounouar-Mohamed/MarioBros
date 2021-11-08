var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/I_want_json'){

        res.writeHead(200, { 'Content-Type':'application/json'});

        var obj = {
            firstName: "",
            lastName: "",
        };

        res.end(JSON.stringify(obj));
    }
    else if (req.url === '/I_want_html'){
        res.writeHead(200, { 'Content-Type':'text/html'});
        html = fs.readFileSync('./games.html');
        res.end(html);
    }
    else{
        res.writeHead(404);
        res.end();
    }
}).listen(3000, '127.0.0.1');
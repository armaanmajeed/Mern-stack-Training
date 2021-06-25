const http = require('http');
const fs = require('fs');

const url = require('url');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    const urlparse = url.parse(req.url, true);
    if (urlparse.pathname == "/about" && req.method == "GET") {
        // res.statusCode = 200;
        // res.setHeader("Content-Type", "application/JSON");
        // res.end(JSON.stringify({"Page": "About Page", "Message": "This is an about page"}));

        fs.readFile('about.html', function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else if (urlparse.pathname == "/login" && req.method == "POST") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/JSON");
        res.end(JSON.stringify({"Name": "AMK", "Message": "Logged in"}));
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/JSON");
        res.end(JSON.stringify({"Message": "Page not found!!"}));
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000`);
});
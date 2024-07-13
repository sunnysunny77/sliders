const https = require("https");
const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.static("site"));  
app.get('/', function(req, res) {
    const options = {
        host: "127.0.0.1",
        port: "2998",
        path: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body
    }
    const proxy = http.request(options, (resp) => {
        res.writeHead(resp.statusCode,resp.headers);
        resp.pipe(res);
    });
    req.pipe(proxy);
});
https.createServer({
    key: fs.readFileSync("./certs/server.key"),
    cert: fs.readFileSync("./certs/server.crt")
},app).listen(3000);

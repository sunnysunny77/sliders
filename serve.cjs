const https = require("https");
const fs = require("fs");
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({});
const express = require("express");
const app = express();
app.use(express.static("site"));  
app.get('/', function(req, res) {
    proxy.web(req, res, { target: "http://127.0.0.1:2998" });
});
https.createServer({
    key: fs.readFileSync("./certs/server.key"),
    cert: fs.readFileSync("./certs/server.crt")
},app).listen(3000);

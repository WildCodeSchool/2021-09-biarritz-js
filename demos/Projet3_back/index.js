"use strict";
var express = require('express');
var app = express();
var routes = require('./controllers');
var port = 3000;
app.use(express.json());
routes.setupRoutes(app);
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});

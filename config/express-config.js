var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


module.exports = function() {
    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: "provide" }));

    app.use(expressValidator());

    consign()
        .include('controllers')
        .then('db')
        .then('classes')
        .into(app);

    return app;
};
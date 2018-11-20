var express = require('express');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var listRouter = require('../src/list/list');
var formRouter = require('../src/form/form');
var viewRouter = require('../src/view/view');

var app = express();
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/../src/layouts' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/../src');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', listRouter);
app.use('/add', formRouter);
app.use('/edit', formRouter);
app.use('/detail', viewRouter);

mongoose.connect("mongodb://127.0.0.1:27017/mycompany", (err) => {
    console.log(err ? err : "mongo connected...");
});

module.exports = app;
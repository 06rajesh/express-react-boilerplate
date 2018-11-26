/**
 * Created by Rajesh on 11/26/18.
 */
require('dotenv').config();

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
//var routes = require('./routes');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'..','/resources/views'));

//Serve all the Static Files
app.use(express.static(path.join(__dirname,'..' ,'/public')));

//app.use('/', routes);

app.get('/*', function(req, res){
    res.render('index');
});

module.exports = app;

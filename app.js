//Dependencies
/*********************************************/

"use strict";

var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
moment = require('moment'),
dateFormat = require('dateformat'),
exphbs = require('express-handlebars');

/*********************************************/


//Handlebars settings
/*********************************************/

//body parser
app.use(bodyParser.urlencoded({extended: true}));

//view engine init
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve static assets
app.use(express.static('public/'));
app.use(express.static('views/layouts/'));
app.use(express.static('public/img/**.*'));

/*********************************************/

var port = Number(process.env.PORT || 3000);

//pages paths
var paths = {
  index: 'partials/index'
};

/*********************************************/



//Routes
/*********************************************/


/*********************************************/



//listening port
app.listen(port, function(){
  console.log('Server Started');
});
/*********************************************/

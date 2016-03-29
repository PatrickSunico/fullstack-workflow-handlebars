var express = require('express');
var ejs = require('ejs');
var app = express();
var exphbs = require('express-handlebars');

var port = Number(process.env.PORT || 3000);


var paths = {
  index: 'pages/index'
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve static assets
app.use(express.static('public'));
// app.use(express.static('views/layouts/'));

app.get('/', function(req,res){
  res.render(paths.index);
});

//listening port
app.listen(port, function(){
  console.log('Server Started');
});

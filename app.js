var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
moment = require('moment'),
exphbs = require('express-handlebars');

//schema values
//title
//insertImage
//body
//dateCreated

//Mongoose/ Model Config
var now = moment();

mongoose.connect('mongodb://localhost/reposte_app');
var blogSchema = new mongoose.Schema({
  title: String,
  body: String,
  created: {type: Date, default: Date.now}
});

//Date Format
var date = blogSchema.created;
var now = moment(date).format('MMMM DD, YYYY');

//Name Placeholder
var name = 'Patrick';


var Blog = mongoose.model('Blog', blogSchema);
//End

// Blog.create({
//   title: "Test Blog",
//   image:"",
//   created:
//   body:
//   "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"
// });

//End


//listening port
var port = Number(process.env.PORT || 3000);

//pages paths
var paths = {
  index: 'partials/index',
  new: 'partials/newblog'
};

//body parser
app.use(bodyParser.urlencoded({extended: true}));

//view engine init
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve static assets
app.use(express.static('public/'));
app.use(express.static('views/layouts/'));
app.use(express.static('public/img/**.*'));


//Routes
//Index show all blogs
app.get('/blogs', function(req,res){

  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else {
      res.render(paths.index, {name:name, blogs:blogs, now:now});
    }
  });
});


//Create Route
app.get('/blogs/new', function(req, res){
  res.render(paths.new,{name:name});
});


//listening port
app.listen(port, function(){
  console.log('Server Started');
});

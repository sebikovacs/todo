
/**
 * Module dependencies.
 */

var express = require('express')

//start server
var app = module.exports = express();

//mongoose setup
require('./db');

//setup routes
var routes = require('./routes');

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.cookieParser());
  app.use(express.bodyParser()); 
  app.use(routes.current_user );
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


//Environment config
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


// Routes
app.get('/', routes.index);
app.post('/create', routes.create );
app.get( '/destroy/:id', routes.destroy );
app.get( '/edit/:id', routes.edit );
app.post( '/update/:id', routes.update );

app.listen(3002, function(){
  console.log("Express server listening on port 3002");
});

  var express     = require('express'),
      mongoose    = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/shortly'); // connect to mongo database named shortly

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

// export our app for testing and flexibility, required by index.js

app.listen(8000);

module.exports = app;


/* Walkthrough of the server

  Express, mongoose, and our server are initialzed here.
  Next, we then inject our server and express into our config/middleware.js file for setup.
    We also exported our server for easy testing

  Middleware.js requires all express middleware and sets it up
    Authentication is set up there as well
  Create individual routers for are two main features, links and users
  Each feature has its own folder with a model, controller, and route file
    The route file is required in middleware.js and injected with its mini router.
    That route file then requires the respective controller and sets up all the routes.
    The controller then requires the respective model and sets up all our endpoints which respond to requests.

*/

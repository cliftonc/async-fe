var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , _ = require('underscore')
  , data = require('./lib/data')
  , path = require('path');

/**
 * Module dependencies.
 */
module.exports.bootstrap = function(options, next) {

  var app = express();

  var dust = require('dustjs-linkedin')
    , cons = require('consolidate');

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.engine('html', cons.dust);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');    
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
  });

  app.configure('development', function(){
    app.use(express.errorHandler());
  });

  app.get('/data/reset', routes.dataReset);
  app.get('/data/add', routes.dataAdd);
  app.get('/type/:iterator?', routes.index);
  app.get('/', routes.index);

  app.listen(options.port, next)
  
}
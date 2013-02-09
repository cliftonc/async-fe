var rootpath = process.cwd() + '/',
	data = require('./data'),
	_ = require('underscore'),
	util = require('util'),
	async = require('async'),
	events = require('eventemitter2'),	
	fs = require('fs'),
	path = require('path'),
	ROOT_PATH = '__document__',
	MAX_TIME = 50;

/**
 * Traverse a document representing a composite heirarchy of any depth, raising an event as you encounter a node.
 * Listeners that are registered for each event type will respond.
 */

/**
 * Simple event handler
 */
function Renderer() {
	
	var self = this;
	
	self.response = {};
	self.timer = {};	
	self.watcher = {};
	self.recursiveRender = recursiveRender;

	self.init = function() {
		// Dynamically load all the listeners
		fs.readdirSync(path.join(rootpath, 'lib/types')).forEach(function(type) {		
			if(type.split(".").length > 1) self.on(type.split(".")[0], require(path.join(rootpath, 'lib/types', type)));		
		});
	}
}
util.inherits(Renderer, events.EventEmitter2);

// Function that traverses an object and raises an event
// when it encounters a child that is not a simple property.
function recursiveRender(renderer, input, params, path, next) {	  	 	

	if(path === ROOT_PATH) renderer.timer[path] = process.hrtime();

  	// Create an array of children nodes, but only those that match our
  	// simple object definition for now
  	var isObjectFilter = function(kv) {
  			if(typeof kv[1] === 'object' && kv[1].ot) return kv;
  		},
  		childNodes = _.chain(input).pairs().filter(isObjectFilter).value(),
  		asyncFn = params.iterator == 'series' ? async.mapSeries : async.map; 

  	// Traverse children via an async map
	asyncFn(childNodes, function(kv, cb) {	  		  	
			  		  	
	  	var key = kv[0],
	  		value = kv[1],
	  		childPath = path + "." + key,
	  		doneCallbackEvent = 'done-' + childPath,
	  		objectType = value.ot,
	  		hasNoChildren = value.oid;

	  	// Register the listener to be notified when it is complete
		renderer.once(doneCallbackEvent, function(donePath) {
			if(renderer.watcher[childPath]) {
				clearTimeout(renderer.watcher[childPath]);
				delete renderer.watcher[childPath];
			}
			renderer.timer[donePath] = process.hrtime(renderer.timer[donePath]);
		 	cb(null, donePath);
		});	

		// If we don't have children, lets watch and timeout		
		if(hasNoChildren) {			
		  	renderer.watcher[childPath] = setTimeout(function() {	  		
		  		renderer.response[childPath] = {before:'<div style="color: red; font-weight: bold;">', content:'Element of type <b>' + value.ot + '</b> failed to respond in ' + (params.max ||  MAX_TIME) + ' ms, do you have a listener for it?', after:'</div>'};
		  		delete renderer.watcher[childPath];
		  		renderer.emit(doneCallbackEvent, childPath);
		  	}, params.max || MAX_TIME);
		}

		// Emit an event to render this element
		renderer.timer[childPath] = process.hrtime();
		renderer.emit(value.ot, {node: value, path: childPath, peers: childNodes.length, params: params});

	 }, function(err) {

	 	renderer.emit('done-' + path, path);
	 	
	 	if(path === ROOT_PATH && typeof next == 'function') {	 		

	 		renderer.timer[path] = process.hrtime(renderer.timer[path])
	 		renderer.removeAllListeners(); // Clean up

	 		// Now final callback
	 		next(null, renderer.response, renderer.timer);

	 	}

	})

}

/**
 * Take an object reference array and render it - synchronous traversal of heirarchy
 */
function respond(input, rendered, timing, next) {
	
	// First generate the output through re-recursing through the page
	var output = "", nodeCount = 0;

	function recursiveResponder(node, path) {
	
		nodeCount++;

		// Pre-content
		output = output + (rendered[path] ? rendered[path].before || "" : "");

		// Content
		output = output + (rendered[path] ? rendered[path].content || "" : "");

		// Find all children of the current node
	  	_.chain(node)
		  .pairs()
		  .filter(function(kv) {
  			 if(typeof kv[1] === 'object' && kv[1].ot) return kv;
  		  })
		  .forEach(function(kv) {
		  	recursiveResponder(kv[1], path + "." + kv[0]);
		  })		

		// After
		output = output + (rendered[path] ? rendered[path].after || "" : "");

	}
	recursiveResponder(input, ROOT_PATH);

	// Now tidy up the timing
	timing = formatTiming(timing);

	// CB
	next(null, output, timing, nodeCount);

}

/**
 * Helper function to nicely format the timings
 */
function formatTiming(timing) {
	
	return _.chain(timing)
			  .pairs()
			  .map(function(kv) {
			  	return {node:kv[0],ms:(kv[1][0]*1000 + kv[1][1]/1000000)}
			  })
			  .sortBy(function(value) { return -value.ms })
			  .value();

}

// Exports
module.exports = {
	recursiveRender: recursiveRender,
	renderPage: function(page, params, next) {
		var renderer = new Renderer();
		renderer.init();
		recursiveRender(renderer, page, params, ROOT_PATH, function(err, rendered, timing) {
			respond(page, rendered, timing, next);
		});	
	}
};


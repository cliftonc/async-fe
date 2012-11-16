
var _ = require('underscore');

/*
 * GET home page.
 */

exports.index = function(req, res) {

	var renderer = require('../lib/render'),
		data = require('../lib/data');

	// Merge route and query params
	var params = _.extend(req.params, req.query);

	// Kick off rendering
	renderer.renderPage(data.page, params, function(err, content, timing, count) {		
		res.render('index', { content: content, title: timing[0].ms, timing: timing, count:count, page: JSON.stringify(data.page)});	
	})
  
};
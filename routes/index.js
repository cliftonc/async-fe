
var _ = require('underscore'),
	renderer = require('../lib/render'),
	data = require('../lib/data');

/*
 * GET home page.
 */

exports.index = function(req, res) {

	// Merge route and query params
	var params = _.extend(req.params, req.query);

	// Kick off rendering
	renderer.renderPage(data.page, params, function(err, content, timing, count) {
		res.render('index', { content: content, title: timing[0].ms, timing: timing, count:count, page: JSON.stringify(data.page)});	
	})
  
};


exports.dataAdd = function(req, res) {

	if(!data.original) data.original = _.clone(data.page);

	var dtc = data.page.C,
		start = data.max || 0;

	for(i=(start || 0); i<(start + 50); i++) {
		data.page['_NEW_' + i] = _.clone(dtc)
	}
	data.max = start + 50;

	res.redirect('/');
		
}

exports.dataReset = function(req, res) {

	data.page = _.clone(data.original);

	res.redirect('/');
		
}
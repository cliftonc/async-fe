var _ = require('underscore'),
    dust = require('dustjs-linkedin'),
	cons = require('consolidate');

/**
 * Render Function for a ROW
 */
module.exports = function(opt) {		
	
	var self = this;

	// Mock service to get article by id with programmable delay
	getArticleById(opt.node.oid, opt.params.delay || 0, function(err, article) {		

		// Over-ride article properties with those from the node
		article = _.extend(article, opt.node);

		// Now render the article based on it's appropriate template
		render(article, function(err, content) {
			if(err) content = 'ERR: ' + err;
			self.response[opt.path] = {content: content};	
			self.emit('done-' + opt.path, opt.path);	
		});

	})
	
}

/**
 * Retrieve article from storage
 */
 function getArticleById(articleId, delay, next) {
 	
 	// Timeout to simulate a load
 	setTimeout(function() {
 		var article = {
 			id: articleId,
 			headline: "Lorem ipsum dolor sit amet",
 			preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum ipsum nec lectus euismod porta. Fusce in nisl cursus purus porta convallis. Nam sed augue purus, ut fermentum elit. Fusce condimentum facilisis nisl, a consectetur diam consequat ac. Nulla facilisi. Vestibulum mollis convallis sem, sit amet aliquam sem bibendum vel. Etiam semper lacinia tellus eget condimentum. In molestie vestibulum scelerisque. Praesent mauris libero, ornare quis ornare at, tincidunt sed erat. Nullam accumsan pretium convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porta tortor vel neque viverra sed cursus augue fringilla. Cras pellentesque nisi sit amet est pretium in placerat magna sodales. Vestibulum dapibus leo ac orci tempus dignissim."
 		}
 		next(null, article);
 	}, delay)

 }

/**
 *	Render 
 */
 function render(article, next) {

 	article.cache = true; // Enable caching
 	
 	// You could lookup the template based on the article style
 	cons.dust('lib/types/templates/article.html', article, next);

 }
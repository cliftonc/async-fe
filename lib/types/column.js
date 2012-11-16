/**
 * Render Function for a ROW
 */
module.exports = function(opt) {	
	var self = this, recursiveRender = require('../render').recursiveRender;
	self.response[opt.path] = {before: '<div class="column C1of' + opt.peers + '">', after:'</div>'};
	recursiveRender(this, opt.node, opt.params, opt.path);
}
/**
 * Render Function for a ROW
 */
module.exports = function(opt) {		
	var self = this;		
	self.response[opt.path] = {content: '<div class="module ' + (opt.node.style || '') + '">MODULE</div>'};
	self.emit('done-' + opt.path, opt.path);
}
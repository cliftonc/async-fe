/**
 * Render Function for a ROW
 */
module.exports = function(opt) {
	var self = this;
	self.response[opt.path] = {before: '<div class="row">', after:'</div>'};
	self.recursiveRender(self, opt.node, opt.params, opt.path);
}
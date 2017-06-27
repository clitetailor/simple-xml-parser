const firstGroup = require('./first-group')

function tagName(text) {
	return firstGroup(text, /<\s*(\w+)/);
}

module.exports = tagName;
const tokenizer = require('tokenize-monster')
const closeTag = require('../xml/close-tag')
const tagAttrs = require('../xml/tag-attrs')

const matchCloseTag = tokenizer.createMatcher(
	closeTag('\\w+'),
	text => [{
		type: 'close-tag',
		text
	}]
)

module.exports = matchCloseTag;
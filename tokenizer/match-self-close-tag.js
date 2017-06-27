const tokenizer = require('tokenize-monster')
const selfCloseTag = require('../xml/self-close-tag')
const tagName = require('../xml/tag-name')
const tagAttrs = require('../xml/tag-attrs')

const matchSelfCloseTag = tokenizer.createMatcher(
	selfCloseTag('\\w+'),
	text => [{
		type: 'self-close-tag',
		tagName: tagName(text),
		attrs: tagAttrs(text),
		text
	}]
)

module.exports = matchSelfCloseTag;
const tokenizer = require('tokenize-monster')
const openTag = require('../xml/open-tag')

const matchOpenTag = tokenizer.createMatcher(
	openTag('\\w+'),
	text => [{
		type: 'open-tag',
		text
	}]
)

module.exports = matchOpenTag;
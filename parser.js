const tokenize = require('./tokenizer/tokenize')
const group = require('./tokenizer/group')

function parser(str) {
	return group(tokenize(str))
}

module.exports = parser;
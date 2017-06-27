const tokenizer = require('tokenize-monster')
const matchOpenTag = require('./match-open-tag')
const matchCloseTag = require('./match-close-tag')
const matchSelfCloseTag = require('./match-self-close-tag')
const unmatchItem = require('./unmatch-item')

const tokenize = tokenizer.compose([
	matchOpenTag,
	matchSelfCloseTag,
	matchCloseTag
])(unmatchItem)

module.exports = tokenize; // XML Tokenizer
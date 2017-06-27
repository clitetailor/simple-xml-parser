const tokenizer = require('tokenize-monster')
const matchCommentTag = require('./match-comment-tag')
const matchOpenTag = require('./match-open-tag')
const matchCloseTag = require('./match-close-tag')
const matchSelfCloseTag = require('./match-self-close-tag')
const unmatchItem = require('./unmatch-item')

const tokenize = tokenizer.compose([
	matchCommentTag, // <== This guy is dangerous, has to be matched first :P
	matchOpenTag,
	matchSelfCloseTag,
	matchCloseTag
])(unmatchItem)

module.exports = tokenize; // XML Tokenizer
const tokenizer = require('tokenize-monster')
const commentTag = require('../xml/comment-tag')

const matchCommentTag = tokenizer.createMatcher(
	commentTag,
	text => [{
		type: 'comment-tag',
		text
	}]
)

module.exports = matchCommentTag;
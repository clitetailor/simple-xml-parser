const tokenizer = require('tokenize-monster')
const tagName = require('../xml/tag-name')
const tagAttrs = require('../xml/tag-attrs')

function group(tokens) {
	return tokenizer.deepGroup(
		tokens,
		(prev, cur) => cur.type === 'open-tag',
		(prev, cur) => prev.type === 'close-tag',
		// Keep the name of properties short to reduce memory.
		(start, end, arr) => [{
			type: 'node',
			name: tagName(arr[start].text),
			attrs: tagAttrs(arr[start].text),
			els: arr.slice(start + 1, end - 1),
			texts: [arr[start].text, arr[end - 1].text]
		}],
		(start, end, arr) => arr.slice(start, end)
	)
}

module.exports = group;
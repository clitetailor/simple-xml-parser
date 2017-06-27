const tokenizer = require('tokenize-monster')

function tagAttrs(str) {
	return tokenizer.reduce(
		tokenizer.matchAndMap(
			str,
			`\\s+\\S+=(?:"[^"]+"|'[^']+')`,
			text => [text.match(`\\s+(\\S+)=(?:"([^"]+)"|'([^']+)')`)],
			text => []
		),
		(accu, [all, attr, value1, value2]) => {
			accu[attr] = value1 || value2;
			return accu;
		},
		{}
	)
}

module.exports = tagAttrs;
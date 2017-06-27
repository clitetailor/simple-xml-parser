const tokenizer = require('tokenize-monster')

function extractText(token) {
	if (token.type === 'node') {
		return token.texts[0] + reverse(token.els) + token.texts[1];
	}

	return token.text;
}

function reverse(dom) {
	if (Array.isArray(dom)) {
		let result = '';

		for (let el of dom) {
			result += extractText(el);
		}

		return result;
	}

	return extractText(dom);
}

module.exports = reverse;
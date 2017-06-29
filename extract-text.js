const tokenizer = require('tokenize-monster')

function text(token) {
	if (token.type === 'node') {
		return token.texts[0] + extractText(token.els) + token.texts[1];
	}

	return token.text;
}

function extractText(token) {
	if (Array.isArray(token)) {
		let result = '';

		for (let el of token) {
			result += text(el);
		}

		return result;
	}

	return text(token);
}

module.exports = extractText;
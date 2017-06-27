function unmatchItem(text) {
	return [{
		type: 'unmatch',
		text
	}]
}

module.exports = unmatchItem;
function selfCloseTag(tagName) {
	return `<\\s*${tagName}(?:\\s+\\S+=(?:"[^"]*"|'[^']*'))*\\s*/>`;
}

module.exports = selfCloseTag;
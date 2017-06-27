function openTag(tagName) {
	return `<\\s*${tagName}(?:\\s+\\S+=(?:"[^"]*"|'[^']*'))*\\s*>`;
}

module.exports = openTag;
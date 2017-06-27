function closeTag(tagName) {
	return `<\\/\\s*${tagName}\\s*>`
}

module.exports = closeTag;
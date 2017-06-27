function firstGroup(str, regexp) {
	return str.match(regexp)[1];
}

module.exports = firstGroup;
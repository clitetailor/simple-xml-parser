const fs = require('fs')
const path = require('path')
const extractText = require('./extract-text')

for (let arg of process.argv) {
	if (arg.match(/.json$/)) {
		const text = fs.readFileSync(arg)
		const tokens = JSON.parse(text);

		const newXML = extractText(tokens)

		fs.writeFileSync(path.resolve(
			path.dirname(arg),
			`new-${path.basename(arg, '.json')}.xml`
		), newXML)
	}
}

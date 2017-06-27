const fs = require('fs')
const path = require('path')
const reverse = require('./reverse')

for (let arg of process.argv) {
	if (arg.match(/.json$/)) {
		const text = fs.readFileSync(arg)
		const tokens = JSON.parse(text);

		const newXML = reverse(tokens)

		fs.writeFileSync(path.resolve(
			path.dirname(arg),
			`new-${path.basename(arg, '.json')}.xml`
		), newXML)
	}
}

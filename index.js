const fs = require('fs')
const path = require('path')
const parser = require('./parser')
const reverse = require('./reverse')

for (let arg of process.argv) {
	if (arg.match(/.xml$/)) {
		const text = fs.readFileSync(arg, 'utf-8');
		const tokens = parser(text);

		fs.writeFileSync(path.resolve(
			path.dirname(arg),
			`${path.basename(arg, '.xml')}.json`
		), JSON.stringify(tokens, null, 2))
	}
}

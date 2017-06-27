const fs = require('fs')
const parser = require('./parser')
const path = require('path')

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

// const text = fs.readFileSync(grdFile, 'utf-8')

// const tokens = parser(text);

// fs.writeFileSync('./mondial-3.0.json', JSON.stringify(tokens, null, 2))
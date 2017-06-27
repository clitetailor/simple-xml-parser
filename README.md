Simple XML Parser
=================

> A simple xml parser in NodeJS.

Prerequisite
------------

- NodeJS (version: >= 6)

Installation
------------

```bash
git clone https://github.com/clitetailor/simple-xml-parser.git
cd ./simple-xml-parser
npm i
```

Demo
----

Run the following command to convert sample `./mondial-3.0.xml` to `./mondial-3.0.json`:

```bash
npm start
```

Usage
-----

To convert a or a list of XML files to JSON, run the following command:

```bash
node ./index.js <xml file(s)>
```

To convert back to XML from the JSON file, run the following command:

```bash
node ./js-xml.js <json file(s)>
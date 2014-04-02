module.exports = displayMetadata;

var formatPackages = require('./formatPackages');
var template = require('./template.html');
var cssOverrides = require('./override-theme.css');

// style sheet is editable here!
cssOverrides.insertRule
	? cssOverrides.insertRule('p { text-decoration: underline; }', cssOverrides.rules.length)
	: cssOverrides.addRule('p', 'text-decoration: underline;');

function displayMetadata (context, write) {
	writeAppInfo(context.app, write);
	write('Rave configured the following packages:');
	write(formatPackages(context.packages), 'pre');
	console.log(context);
}

function writeAppInfo (app, write) {
	var text;
	text = template.replace(/\$\{([^\}]+)\}/g, function (m, token) {
		return app[token];
	});
	write(text, 'h2');
}

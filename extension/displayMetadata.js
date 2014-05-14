module.exports = displayMetadata;

var formatPackages = require('./formatPackages');
var template = require('./template.html');
var cssOverrides = require('./override-theme.css');

// style sheet is editable here!
cssOverrides.insertRule
	? cssOverrides.insertRule('p { text-decoration: underline; }', cssOverrides.cssRules.length)
	: cssOverrides.addRule('p', 'text-decoration: underline;');

var testOverrides = (function (p) {
	p.className = 'test-override';
	return p.offsetWidth === 7;
}(document.body.appendChild(document.createElement('p'))));

function displayMetadata (context, write) {
	writeAppInfo(context.app, write);
	write('Rave configured the following packages:');
	write(formatPackages(context.packages), 'pre');
	write('CSS overrides applied correctly? ' + testOverrides);
	console.log(context);
}

function writeAppInfo (app, write) {
	var text;
	text = template.replace(/\$\{([^\}]+)\}/g, function (m, token) {
		return app[token];
	});
	write(text, 'h2');
}

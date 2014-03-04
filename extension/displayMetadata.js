module.exports = displayMetadata;

var formatPackages = require('./formatPackages');
var template = require('./template.html');

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

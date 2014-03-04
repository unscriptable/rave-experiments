var formatPackages = require('./formatPackages');

module.exports = displayMetadata;

function displayMetadata (context, write) {
	writeAppInfo(context, write);
	write('Rave configured the following packages:');
	write(formatPackages(context.packages), 'pre');
	console.log(context);
}

function writeAppInfo (context, write) {
	write('App: ' + context.app.name, 'h2');
	write('App entry point: ' + context.app.main, 'h2');
}

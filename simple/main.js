module.exports = main;

var displayMetadata = require('./displayMetadata');
var write = require('./write');

function main (context) {
	write('Hello world!', 'h1');
	displayMetadata(context, write);
}

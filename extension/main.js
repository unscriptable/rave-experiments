module.exports = main;

var displayMetadata = require('./displayMetadata');
var write = require('./write');
require('./base-theme.css');

function main (context) {
	write('Hello world!', 'h1');
	displayMetadata(context, write);
}

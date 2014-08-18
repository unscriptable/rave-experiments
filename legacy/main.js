module.exports = main;

var displayMetadata = require('./displayMetadata');
var write = require('./write');

var modernizr = require('modernizr');
var bootstrap = require('bootstrap');
var agPipeline = require('aerogear-pipeline');

function main (context) {
	write('Hello world!', 'h1');
	displayMetadata(context, write);
}

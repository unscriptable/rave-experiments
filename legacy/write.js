module.exports = write;

var domReady = require('curl/domReady');
var callbacks = require('when/callbacks');

function write (msg, tagType) {
	callbacks.call(domReady).then(function () {
		var doc = document;
		var body = doc.body;
		body.appendChild(doc.createElement(tagType || 'p')).innerHTML = msg;
	});
}

define(function (require) {

var domReady = require('curl/src/curl/domReady');
var callbacks = require('when/callbacks');

return function (msg, tagType) {
	callbacks.call(domReady).then(function () {
		var doc = document;
		var body = doc.body;
		body.appendChild(doc.createElement(tagType || 'p')).innerHTML = msg;
	});
};

});


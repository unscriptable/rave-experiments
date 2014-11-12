define(function (require) {

var $ = require('jquery');

return function (msg, tagType) {
	$(document).ready(function () {
		var doc = document;
		var body = doc.body;
		body.appendChild(doc.createElement(tagType || 'p')).innerHTML = msg;
	});
};

});


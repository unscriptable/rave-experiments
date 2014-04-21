define(function (require) {

return function (msg, tagType) {
	require(['domReady!'], function () {
		var doc = document;
		var body = doc.body;
		body.appendChild(doc.createElement(tagType || 'p')).innerHTML = msg;
	});
};

});


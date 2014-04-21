define(function () {
	return function (packages) {
		return JSON.stringify(Object.keys(packages), null, '    ');
	}
});


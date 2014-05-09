var angular = require('angular');

require('./filters');
require('./services');
require('./directives');
require('./controllers');

module.exports = angular
	.module('myApp', [
		'ngRoute',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers'
	])
	.config([
		'$routeProvider', function ($routeProvider) {
			$routeProvider.when(
				'/view1',
				{ templateUrl: 'app/view1/template.html', controller: 'MyCtrl1' }
			);
			$routeProvider.when(
				'/view2',
				{ templateUrl: 'app/view2/template.html', controller: 'MyCtrl2' }
			);
			$routeProvider.otherwise({ redirectTo: '/view1' });
		}
	]);

angular.bootstrap(document, ['myApp']);

var angular = require('angular');

var ngRoute = require('angular-route');
var filters = require('./filters');
var services = require('./services');
var directives = require('./directives');
var controllers = require('./controllers');

module.exports = angular
	.module('myApp', [
		ngRoute,
		filters,
		services,
		directives,
		controllers
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
			$routeProvider.otherwise({redirectTo: '/view1'});
		}
	]);

angular.bootstrap(document, ['myApp']);

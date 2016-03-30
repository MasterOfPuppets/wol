'use strict';

// Declare app level module which depends on views, and components
angular.module('wol', [
  'ngRoute',
  'wol.main',
  'wol.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);

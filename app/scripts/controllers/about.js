'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the a1App
 */
 
angular.module('a1App')
  .controller('AboutCtrl', function ($scope) {
  	$scope.setActivePage("about");
});

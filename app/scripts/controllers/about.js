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
  	$scope.aboutText = "UTA Snaps is a image sharing program.  Users can upload images and vote on them.  They can also create account to favorite snaps that they like.";
});

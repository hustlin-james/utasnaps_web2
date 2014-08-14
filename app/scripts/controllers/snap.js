'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:SnapCtrl
 * @description
 * # SnapCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('SnapCtrl', function ($scope,$routeParams,Snapscache) {
   // $scope.imgSrc = $routeParams.imgSrc;
   var objectId = $routeParams.objectId;
   var snap = Snapscache.getObject(objectId);
   $scope.snap = snap;
   console.log($scope.snap);
 });

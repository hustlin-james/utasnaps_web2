'use strict';

/**
 * @ngdoc directive
 * @name a1App.directive:header
 * @description
 * # header
 */
angular.module('a1App')
  .directive('header', function () {

    return function(scope,element){
      //scope.user = "james";
      scope.$watch('activePage', function(value){
        var activeLink = element.find('.'+value);
        var activeClass = 'active';
        var findResult = element.find('.'+activeClass);
        element.find("li."+activeClass).removeClass(activeClass);
        activeLink.addClass(activeClass);

        var currentUser = Parse.User.current();
        if(currentUser){
          scope.user={};
          scope.user.username = currentUser.getUsername();
        }else{
          console.log("no user");
          delete scope.user;
        }
      });
    }
    /*
    return {
      restrict: 'A',
      replace: true,
      scope: {
      	user: '=user'
      },
      link: function($scope){

      }
      controller: function($scope){

        $scope.$watch("something", function(newValue, oldValue){
          console.log("value: "+newValue);
          console.log("oldValue: "+oldValue);
        });

        var currentUser = Parse.User.current();
        if(currentUser){
        	$scope.user = {};
          $scope.user.username = currentUser.getUsername();
        }

      },
      templateUrl: 'views/header.html'
    };
    */
 });

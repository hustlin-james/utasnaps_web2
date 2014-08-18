'use strict';

/**
 * @ngdoc directive
 * @name a1App.directive:header
 * @description
 * # header
 */
angular.module('a1App')
  .directive('header', function () {

    //just returning a function only specifies the link key
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
 });

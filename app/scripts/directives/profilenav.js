'use strict';

/**
 * @ngdoc directive
 * @name a1App.directive:profilenav
 * @description
 * # profilenav
 */
angular.module('a1App')
  .directive('profilenav', function () {
    return {
    	restrict: 'A',
    	link: function postLink(scope,element,attrs){
    		scope.$watch('activeProfileNav', function(value){
    			console.log('value: '+value);

    			var activeLink = element.find('#'+value);
    			var activeClass = 'active';
    			var findResult = element.find('.list-group-item.'+activeClass);
   
    			var temp = element.find('.list-group-item.'+activeClass);
    			console.log(temp);
    			temp.removeClass(activeClass);
    			activeLink.addClass(activeClass);
    			
    		});
    	},
    	controller: function($scope){
    		//$scope.activeProfileNav = "awesome";
    	}
    };
  });

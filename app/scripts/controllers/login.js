'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the a1App
 */

angular.module('a1App')
  .controller('LoginCtrl', function ($scope,$location) {

   $scope.setActivePage("login");

   $scope.login = function(){
   	//console.log('login clicked');
   	console.log($scope.username);
   	console.log($scope.password);

   	if($scope.username &&
   		$scope.password){

   		//Call Parse login here
   		Parse.User.logIn($scope.username, $scope.password, {
   			success: function(user){
   				outputAlert("you have been logged in!", "Login Success");
               //Redirect the user to the home page
               console.log("redirecting the user");
               $scope.$apply(function(){
                  $location.path('/');
               });
              
   			},
   			error: function(user,error){
   			   outputAlert(error.message, "Error Loggin in");
   			}
   		});

   	}
   	else{
   		outputAlert("Please fillout both username and password", 
            "Empty Fields");
      }

   };

   function outputAlert(msg,title){
      bootbox.dialog({
         message: msg,
         title: title,
         buttons: {
            main: {
               label: "OK",
               className: "btn-primary",
               callback: function(){
                  //TODO
                  //$location.path('/');
               }
            }
         }
      });
    }

});

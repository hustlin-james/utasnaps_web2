'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('SignupCtrl', function ($scope) {
    
    $scope.signup = function(){

    	if($scope.username &&
    	$scope.email &&
    	$scope.password &&
    	$scope.vPassword &&
    	$scope.major){

	    	if($scope.password && $scope.vPassword
	    	 && ($scope.password == $scope.vPassword)){
	    		
	    		//Sign the user up
	    		console.log("signing the user up");

	    		$("#submitBtn").prop('disabled',true);

	    		var user =  new Parse.User();
	    		user.set("username", $scope.username);
	    		user.set("password", $scope.password);
	    		user.set("email", $scope.email);
	    		user.set("major", $scope.major);

	    		user.signUp(null, {
	    			success: function(user){
	    				outputAlert("Please check your email to confirm",
	    				 "Signup successful");
	    				$("#submitBtn").prop('disabled',false);
	    			},
	    			error: function(user,error){
	    				outputAlert(error.message,"Signup Failed");
	    				$("#submitBtn").prop('disabled',false);
	    			}
	    		});	

	    	}else{
	    		outputAlert("Please check the passwords match.",
	    			"Password doesnt match");
	    	}

	    }else{
	    	outputAlert("Please fillout the username,email,password,and major",
	    		"Empty Fields");
	    }
    }

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
					}
				}
			}
   		});
    }

});

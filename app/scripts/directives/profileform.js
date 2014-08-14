'use strict';

/**
 * @ngdoc directive
 * @name a1App.directive:profileForm
 * @description
 * # profileForm
 */
angular.module('a1App')
  .directive('profileForm', function (snapsuser) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

      	var currentUser = Parse.User.current();
      	scope.currentEmail = currentUser.getEmail();
      	scope.currentMajor = currentUser.get('major');

      	//new properties
      	scope.newEmail = "";
      	scope.newMajor = "";

      	scope.buttonText = "Edit";
        //element.text('this is the profileForm directive');
        scope.editBtnClicked = function(){
      		console.log("editBtnClicked");

      		//Remove the disabled attribute
      		//element.find('')
      		var fieldset = element.find('fieldset');

      		if(fieldset.attr('disabled')){
      			console.log('removing disabled');
      			fieldset.removeAttr('disabled');

      			scope.buttonText = "Save";
      		}else{
      			console.log('adding disabled');
      			fieldset.attr('disabled', '');

      			scope.buttonText = "Edit";
      			//Disable the buttons
      			element.find('button').attr('disabled','');
      			
      			//Save the user properties
      			console.log("newEmail: "+scope.newEmail);
      			console.log("newMajor: "+scope.newMajor);

      			var propDict = {
      				"email":scope.newEmail,
      				"major":scope.newMajor
      			};

      			snapsuser.changeUserProperties(propDict).then(function(results){
      				element.find('button').removeAttr('disabled');
      				console.log('results');
      				console.log(results);
      			});

      			/*
      			snapsuser.changeUserProperties({
      				"username":
      				"james"
      			}).then(function(results){
      				console.log("results");
      				console.log(results);
      			});
				*/
      		}
      	}

      	scope.cancelBtnClicked = function(){
      		var fieldset = element.find('fieldset');
      		if(!fieldset.attr('disabled')){
      			fieldset.attr('disabled', '');
      			scope.buttonText = "Edit";
      		}
      	}
      },
      controller: function($scope){
      	//Does nothing currently
      }
    };
  });

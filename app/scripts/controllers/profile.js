'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('ProfileCtrl', function ($scope,$location,snapsuser) {

   if(!$scope.setActiveProfileNav){
    $scope.setActiveProfileNav = function(name){
      $scope.activeProfileNav = name;
    }
   }
   
   $scope.setActivePage("profile");
   $scope.setActiveProfileNav("profile_profile");

   $scope.tabs = {
   	'profile':'views/profile.profile.html',
   	'favorites':'views/profile.favorites.html'
   };

   $scope.currentTab = 'views/profile.profile.html';

   $scope.favoriteSnaps = [];

   var currentUser = Parse.User.current();
   $scope.username = currentUser.getUsername();

   //Just a hash to check if the snap exists or not
   //before pushing it into the temporary favorites array
   var favoriteSnapsHash = {};

   $scope.onClickTab = function(identifier){
   	$scope.currentTab = $scope.tabs[identifier];
   	if(identifier== 'favorites'){

      $scope.setActiveProfileNav('profile_favorites');

   		console.log("favorites tab clicked");
         //$location.path('/login');

         /*retrieve the user's favorites*/
         snapsuser.getUserFavoriteSnaps().then(function(results){
            angular.forEach(results, function(object, index){

               var temp = {
                id: object.id,
                title: object.get('title'),
                publisherUsername: object.get('publisherUsername'),
                numCookies: object.get('numCookies'),
                description: object.get('description'),
                imgSrc: object.get('imageFile').url(),
                parseObject: object
              };

              if(!favoriteSnapsHash[temp.id]){
                $scope.favoriteSnaps.push(temp);
                favoriteSnapsHash[temp.id]=true;
              }

            });

         });
   	}else{
      $scope.setActiveProfileNav('profile_profile');
      console.log("profile tab clicked");
    }
   };

   $scope.logUserout = function(){
      Parse.User.logOut();
      var currentUser = Parse.User.current();
      console.log("currentUser: "+currentUser);
      if(!currentUser){
            
         outputAlert("You have been logged out!", "Logging User Out");
         console.log("redirecting the user");
         $location.path('/');
        
      }else{
         outputAlert("Error logging you out.", "Error");
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
               }
            }
         }
      });
    }

   function userFavoriteSnaps(){
   		var currentUser = Parse.User.current();
   		var relation = currentUser.relation("favoriteSnaps");
   		relation.query().find({
   			success: function(snaps){
   				console.logo(snaps.length);
   			},
   			error: function(error){
   				console.log("error: "+error);
   			}
   		});
   }

 });

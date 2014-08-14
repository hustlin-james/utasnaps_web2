'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('UploadCtrl', function ($scope) {
   
    $scope.setActivePage("upload");
  	$scope.title = "";
  	$scope.description = "";

  	$scope.uploadSnap = function(){
  		var fileUploadControl = $("#fileUpload")[0];

      if($scope.title && $scope.description &&
        fileUploadControl.files.length > 0){

        $("#submitBtn").prop('disabled',true);
      
         /*
          Snap:
          description
          imageFile
          numCookies
          publisherUsername
          title
        */

        var title = $scope.title;
        var description = $scope.description;

        var publisherUsername = "anonymous";
        var currentUser = Parse.User.current();

        if(currentUser){
          publisherUsername = currentUser.getUsername();
        }

        var file = fileUploadControl.files[0];
        var name = "photo";
        var parseFile = new Parse.File(name, file);
        
        parseFile.save().then(function(){
          var snap = new Parse.Object("Snap");
          snap.set("title", title);
          snap.set("description", description);
          snap.set("publisherUsername",publisherUsername);
          snap.set("numCookies", 0);
          snap.set("imageFile", parseFile);

          snap.save().then(function(){

            bootbox.dialog({
              message: "Successfully upload snap.",
              title: "Uploaded Snap",
              buttons: {
                  main: {
                    label: "OK",
                    className: "btn-primary",
                    callback: function() {
                      $("#submitBtn").prop('disabled',false);
                    }
                  }
                }
            });

          }, function(error){
            errorUploadAlert();
          });
        },function(error){
          errorUploadAlert();
        });

      }else{

        bootbox.dialog({
          message: "Please fill out title and description and upload a file.",
          title: "Empty fields",
          buttons: {
            main: {
              label: "OK",
              className: "btn-primary",
              callback: function() {
                //console.log("OK button clicked");
                $("#submitBtn").prop('disabled',false);
              }
            }
          }
        });

      }

  	};

    function errorUploadAlert(){
        bootbox.dialog({
        message: "Unable to Upload file.",
        title: "Error uploading",
        buttons: {
            main: {
              label: "OK",
              className: "btn-primary",
              callback: function() {
                //console.log("OK button clicked");
                $("#submitBtn").prop('disabled',false);
              }
            }
          }
       });
    }

 });

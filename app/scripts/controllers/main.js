'use strict';

/**
 * @ngdoc function
 * @name a1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the a1App
 */
angular.module('a1App')
  .controller('MainCtrl', function ($scope,$location,snaps,Snapscache) {

    if(!$scope.setActivePage)
      $scope.setActivePage = function(name){
        $scope.activePage = name;
        console.log("$scope.activePage: "+$scope.activePage);
      };

    $scope.setActivePage("main");

    $scope.user = {
      name: "James"
    };

  	$scope.snaps = {};
    $scope.snaps.itemsSet = [];
    $scope.snaps.busy = false;

    var limit = 10;
    var currentPage = 0;
    var noMoreData = false;

  	$scope.snaps.nextPage = function(){
  		if($scope.snaps.busy || noMoreData)
  			return;

  		$scope.snaps.busy = true;

  		snaps.getNextPage(limit,limit*currentPage).then(function(results){
  			$scope.snaps.busy = false;
  			console.log('results length: '+results.length);
  			var tempAry = [];
            for(var i = 0; i < results.length; i++){

              if(i%3==0 && i!=0){
                //console.log(that.itemsSet.length);
                $scope.snaps.itemsSet.push(tempAry);
                tempAry = [];
              }

              var object = results[i];

              tempAry.push({
              	id: object.id,
                title: object.get('title'),
                publisherUsername: object.get('publisherUsername'),
                numCookies: object.get('numCookies'),
                description: object.get('description'),
                imgSrc: object.get('imageFile').url(),
                parseObject: object
              });
            }

            if(results.length == 0){
            	noMoreData = true;
            }else{
            	currentPage++;
            }

  		}, function(err){
  			console.log('error: '+err);
  		});

  	};

  	$scope.imgClicked = function(snap){
  		console.log('id: '+snap.id);
  		Snapscache.addObject(snap);
  		$location.path('/snap').search({objectId:snap.id});
  	};

    $scope.favoriteClicked = function(snap){

      var currentUser = Parse.User.current();

      if(currentUser){
         var object = snap.parseObject;
         var relation = currentUser.relation("favoriteSnaps");
         relation.add(object);
         currentUser.save().then(function(user){
            console.log("favorites added: "+object.id);
            outputAlert("added snap to favorites!", "Success");
            //show alert
         }, function(error){
            console.log("favorites error: "+object.id);
            console.log(error);
            outputAlert("unable to add snap to favorites.", "Error");
         });

      }else{
        console.log("Please login to favorite snaps");
        outputAlert("Please login to favorite snaps", "Login");
      }
    
    };

    $scope.giveCookie = function(snap){
      var object = snap.parseObject;
      object.increment("numCookies");

      object.save().then(function(o){
        outputAlert("You gave a cookie!", "Gave Cookie!");
        $scope.$apply(function(){
          snap.numCookies = o.get("numCookies");
        });
      },function(err){
        outputAlert("Unable to give cookie.", "Error");
      });
    };


    $scope.minusCookie = function(snap){
      var object = snap.parseObject;
      object.increment("numCookies",-1);

      object.save().then(function(o){
        outputAlert("You took a cookie!", "Took Cookie!");
        $scope.$apply(function(){
          snap.numCookies = o.get("numCookies");
        });
      }, function(err){
        outputAlert("Unable to take cookie.", "Error");
      });
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

});

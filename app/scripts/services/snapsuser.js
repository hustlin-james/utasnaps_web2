'use strict';

/**
 * @ngdoc service
 * @name a1App.snapsuser
 * @description
 * # snapsuser
 * Factory in the a1App.
 */
angular.module('a1App')
  .factory('snapsuser', function ($q) {

    var snapsuser = {
      getUserFavoriteSnaps: function(){
        var defer = $q.defer();
        
        var user = Parse.User.current();
        var relation = user.relation("favoriteSnaps");
        relation.query().find({
          success: function(results){
            defer.resolve(results);
          },
          error: function(error){
            defer.reject(err);
          }
        });
        return defer.promise;
      },
      changeUserProperties: function(propDict){
        var defer = $q.defer();
        var user = Parse.User.current();

        for(var p in propDict){
          user.set(p, propDict[p]);
        }

        user.save({
          success: function(u){
            console.log("updated user");
            defer.resolve(u);
          },
          error: function(u,error){
            console.log("error");
            defer.reject(error);
          }
        });
        return defer.promise;
      }
    };
    return snapsuser;
  });

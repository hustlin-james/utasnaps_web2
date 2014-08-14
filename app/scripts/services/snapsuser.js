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
      }
    };
    return snapsuser;
  });

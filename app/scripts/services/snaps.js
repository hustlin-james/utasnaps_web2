'use strict';

/**
 * @ngdoc service
 * @name a1App.snaps
 * @description
 * # snaps
 * Factory in the a1App.
 */
angular.module('a1App')
  .factory('snaps', function ($q) {
 
   var Snaps = Parse.Object.extend('Snap',{},{

    getNextPage: function(limit,offset){
      var defer = $q.defer();

      var query = new Parse.Query(this);
      query.descending('numCookies');
      query.limit(limit);
      query.skip(offset);
      query.find({
        success: function(results){
          defer.resolve(results);
        },
        error: function(err){
          defer.reject(err);
        }
      });

      return defer.promise;
    }

   });
   return Snaps;
  });

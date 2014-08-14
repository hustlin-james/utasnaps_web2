'use strict';

/**
 * @ngdoc service
 * @name a1App.snapsCache
 * @description
 * # snapsCache
 * Service in the a1App.
 */
angular.module('a1App')
  .service('Snapscache', function Snapscache() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var snapsCache = {};

    return {
    	clearCache: function(){
    		snapsCache = {};
    	},
    	addObject: function(snapObject){
    		snapsCache[snapObject.id]  = snapObject;
    	},
    	getObject: function(objectId){
    		return snapsCache[objectId];
    	}
    };

  });

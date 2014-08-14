'use strict';

/**
 * @ngdoc service
 * @name a1App.Snaps
 * @description
 * # Snaps
 * Factory in the a1App.
 */
angular.module('a1App')
  .factory('Snaps', function () {

    var that;
    var Snaps = function(){
      this.itemsSet = [];
      this.busy = false;
      this.after = '';
      that = this;
    }

    Snaps.prototype.nextPage = function(){
      //console.log('starting stuff');
      //console.log(that.busy);
      if(that.busy)
        return;

      that.busy = true;

      //Query to parse for the images data
      var Snap = Parse.Object.extend("Snap");
      var query = new Parse.Query(Snap);
      query.descending('numCookies');
      query.find({
        success: function(results){
            var tempAry = [];
            for(var i = 0; i < results.length; i++){

              if(i%3 == 0 && i!=0){
                //console.log(that.itemsSet.length);
                that.itemsSet.push(tempAry);
                tempAry = [];
              }

              var object = results[i];
              tempAry.push({
                title: object.get('title'),
                publisherUsername: object.get('publisherUsername'),
                numCookies: object.get('numCookies'),
                description: object.get('description'),
                imgSrc: object.get('imageFile').url()
              });

              //console.log('tempAryLength: '+tempAry.length);
            }

          //console.log(that.itemsSet.length);

          var itemsSetLength = that.itemsSet.length - 1;
          var itemsSetLastInnerArray = that.itemsSet[itemsSetLength];
          var lastItem = itemsSetLastInnerArray[itemsSetLastInnerArray.length - 1];
          
          //this.after =  "t3_"+lastItem.id;
          that.busy = false;
        },
        error: function(error){
         // console.log('error');
          that.busy = false;
        }
      });
      
    };

    return Snaps;
});

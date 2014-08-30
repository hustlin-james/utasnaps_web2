'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('a1App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have the activePage set as main', function(){
     expect(scope.activePage).toBe("main");
  });
   
  describe('functions exist', function(){
    it('shoud have nextPage', function(){
      expect(scope.snaps.nextPage).toBeDefined();
    })
  });
});

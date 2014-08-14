'use strict';

describe('Controller: SnapCtrl', function () {

  // load the controller's module
  beforeEach(module('a1App'));

  var SnapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SnapCtrl = $controller('SnapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

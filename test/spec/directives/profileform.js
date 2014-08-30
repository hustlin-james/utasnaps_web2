'use strict';

describe('Directive: profileForm', function () {

  // load the directive's module
  beforeEach(module('a1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  /*
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<profile-form></profile-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the profileForm directive');
  }));
  */
});

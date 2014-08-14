'use strict';

describe('Service: snapsuser', function () {

  // load the service's module
  beforeEach(module('a1App'));

  // instantiate service
  var snapsuser;
  beforeEach(inject(function (_snapsuser_) {
    snapsuser = _snapsuser_;
  }));

  it('should do something', function () {
    expect(!!snapsuser).toBe(true);
  });

});

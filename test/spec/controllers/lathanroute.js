'use strict';

describe('Controller: LathanrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('feBathc4App'));

  var LathanrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LathanrouteCtrl = $controller('LathanrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LathanrouteCtrl.awesomeThings.length).toBe(3);
  });
});

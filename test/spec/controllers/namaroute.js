'use strict';

describe('Controller: NamarouteCtrl', function () {

  // load the controller's module
  beforeEach(module('feBathc4App'));

  var NamarouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NamarouteCtrl = $controller('NamarouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NamarouteCtrl.awesomeThings.length).toBe(3);
  });
});

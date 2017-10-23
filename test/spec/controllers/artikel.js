'use strict';

describe('Controller: ArtikelCtrl', function () {

  // load the controller's module
  beforeEach(module('feBathc4App'));

  var ArtikelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtikelCtrl = $controller('ArtikelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArtikelCtrl.awesomeThings.length).toBe(3);
  });
});

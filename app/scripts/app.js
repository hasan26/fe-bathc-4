'use strict';

/**
 * @ngdoc overview
 * @name feBathc4App
 * @description
 * # feBathc4App
 *
 * Main module of the application.
 */
angular
  .module('feBathc4App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/my/route', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myRoute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

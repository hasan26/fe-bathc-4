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
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/namaRoute', {
        templateUrl: 'views/namaroute.html',
        controller: 'NamarouteCtrl',
        controllerAs: 'namaRoute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

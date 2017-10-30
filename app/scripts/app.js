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
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MyrouteCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/myroute.html'
        });

  })
  /*
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/route', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myRoute'
      })
      .when('/my/route', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myRoute'
      })
      .when('/latihanRoute', {
        templateUrl: 'views/lathanroute.html',
        controller: 'LathanrouteCtrl',
        controllerAs: 'lathanRoute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/

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
  .config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/landing', '/landing/home');
    $urlRouterProvider.when('/', '/login');

    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'level0': {
            templateUrl: 'views/blank0.html'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'level0': {
            templateUrl: 'views/login.html'
          }
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'level0': {
            templateUrl: 'views/dashboard.html'
          }
        }
      })
      .state('landing', {
        abstract : true,
        url: '/landing',
        views: {
          'level0': {
            templateUrl: 'views/landing.html'
          }
        }
      }).state('landing.home', {
        url: '/home',
        views: {
          'level1': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('landing.about', {
        url: '/about',
        views: {
          'level1': {
            templateUrl: 'views/about.html',
            controller: 'MainCtrl'
          }
        }
      })
      // .state('home', {
      //   url: '/home',
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
    ;

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

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
  // .config(function($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .when('/namaRoute', {
  //       templateUrl: 'views/namaroute.html',
  //       controller: 'NamarouteCtrl',
  //       controllerAs: 'namaRoute'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });

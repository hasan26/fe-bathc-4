'use strict';

/**
 * @ngdoc overview
 * @name feBathc4App
 * @description
 * # feBathc4App
 *
 * Main module of the application.
 */
var myApp = angular
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
    $urlRouterProvider.otherwise('/landing/home');
    $urlRouterProvider.when('/landing', '/landing/home');
    $urlRouterProvider.when('/', '/landing/home');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'level0': {
            templateUrl: 'views/dashboard.html',
            controller: 'MainCtrl'
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
      .state('landing.addArticle', {
        url: '/add/article',
        views: {
          'level1': {
            templateUrl: 'views/addArticle.html',
            controller: 'ArticleCtrl'
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

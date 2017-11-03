'use strict';

/**
 * @ngdoc function
 * @name feBathc4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feBathc4App
 */

myApp
  .controller('ArticleCtrl',['$scope', '$scope', '$scope', '$log',
    function ($scope, $http, $state, $log) {
      $scope.addArticle = function(){

        console.log($scope.art);
      };
    }
  ]);

// myApp
//   .controller('ArticleCtrl', function($scope, $http, $state)
//
//
//     {
//
//
//
//       this.awesomeThings = [
//         'HTML5 Boilerplate',
//         'AngularJS',
//         'Karma'
//       ];
//
//       $scope.addArticle = function(){
//         $state.go('landing.home');
//         console.log('haha');
//       };
//     });

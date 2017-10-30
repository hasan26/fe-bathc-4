'use strict';

/**
 * @ngdoc function
 * @name feBathc4App.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the feBathc4App
 */
angular.module('feBathc4App')
  .controller('MyrouteCtrl', function ($scope, $http) {
    $http.get('http://nikola.getsandbox.com/scholarship/2').then(function(respons){
        $scope.data = respons.data;
        // console.log(respons.data)
    }, function(){console.log('error')});

  });

'use strict';

/**
 * @ngdoc function
 * @name feBathc4App.controller:LathanrouteCtrl
 * @description
 * # LathanrouteCtrl
 * Controller of the feBathc4App
 */
angular.module('feBathc4App')
  .controller('LathanrouteCtrl', function ($scope, $http) {
    $scope.latihanRout = function(){
      alert('Welcome');
    }
    $scope.textInput = '';

    $scope.myfunction = function(data){
      alert(data);
    }


    $scope.records = [
      "Alfreds Futterkiste",
      "Berglunds snabbköp",
      "Centro comercial Moctezuma",
      "Ernst Handel",
    ];
    // $scope.Api = function() {
    //   $http.get('http://budi-daya-jamur-admin.herokuapp.com/api/home').then(success, error);
    //   console.log('Api');
    //
    //     function success (respons){
    //       console.log(respons.data.articles);
    //       $scope.record=respons.data.articles;
    //   }
    //   function error(){
    //     console.log('error');
    //   };
    // };



  });

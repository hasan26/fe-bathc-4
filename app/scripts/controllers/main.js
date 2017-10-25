'use strict';

/**
 * @ngdoc function
 * @name feBathc4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feBathc4App
 */
angular.module('feBathc4App')
  .controller('MainCtrl', function($scope, $http)

    // {
    //   var succesCallBack = function(response) {
    //     $scope.budidaya = response.data;
    //   };
    //
    //   var errorCallBack = function(response) {
    //     $scope.error = response.data;
    //   };
    //   $http({
    //       method: 'GET',
    //       url: 'http://budi-daya-jamur-admin.herokuapp.com/api/home'
    //     })
    //     .then(succesCallBack, errorCallBack);
    // });


    {
      $http.get('http://budi-daya-jamur-admin.herokuapp.com/api/home').then(function(respons) {
        $scope.budidaya = respons.data.articles;
        console.log(respons.data.articles)
      }, function() {
        console.log('error')
      });


      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

    });

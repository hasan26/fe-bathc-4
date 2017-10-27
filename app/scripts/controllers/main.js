'use strict';

/**
 * @ngdoc function
 * @name feBathc4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feBathc4App
 */
angular.module('feBathc4App')

  .controller('MainCtrl', function ($scope, $http) {
   console.log('bebas');

  	$http.get('http://budi-daya-jamur-admin.herokuapp.com/api/home').then(success, error);

  	function success(response){
  		$scope.data = response.data;
  	}

  	function error(){
  		console.log('error')
  	}

});

  

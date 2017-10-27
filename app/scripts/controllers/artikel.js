'use strict';

/**
 * @ngdoc function
 * @name feBathc4App.controller:ArtikelCtrl
 * @description
 * # ArtikelCtrl
 * Controller of the feBathc4App
 */

angular.module('feBathc4App')
  .controller('ArtikelCtrl', function ($scope, $http) {

  	$scope.textSample = '';
  	$scope.records = []

  	$scope.alert1= function(data){
  		alert(data);	
  	};


  	$scope.getData = function(){
  		$http.get('http://budi-daya-jamur-admin.herokuapp.com/api/home').then(success, error);
  		console.log('get data');

  		 function success(response){
  			console.log(response)
  			$scope.records=response.data.articles;
  		}

  		function error(){
  			console.log('error')
 	 	}
  	}

  	$scope.getData();





  });

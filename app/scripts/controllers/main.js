'use strict';

/**
 * @ngdoc function
 * @name easyFavesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyFavesApp
 */
angular.module('easyFavesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

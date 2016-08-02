'use strict';

/**
 * @ngdoc function
 * @name meanTodoApp.controller:MainCtrl
 * @description
 * # TodoCtrl
 * Controller of the meanTodoApp
 */
angular.module('meanTodoApp')
  .controller('TodoCtrl', function () {
    this.todo = [
      'Controller',
      'Service',
      'Directive'
    ];
  });

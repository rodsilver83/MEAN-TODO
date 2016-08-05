'use strict';

/**
 * @ngdoc function
 * @name meanTodoApp.controller:MainCtrl
 * @description
 * # TodoCtrl
 * Controller of the meanTodoApp
 */
angular.module('meanTodoApp')
  .controller('TodoCtrl', ['$scope','TodoService',function ($scope,TodoService) {
    this.list = TodoService.list();
    this.newTodo = {id: 0, todo: ""};
    this.updateTodo = null;

    this.create = function(){
      TodoService.create(this.newTodo);
      this.newTodo = {id: 0, todo: ""};
    }

    this.delete = function(todo){
      TodoService.delete(todo);
    }

    this.showUpdate = function(todo){
      this.updateTodo = todo;
    }

    this.update = function(){
      TodoService.update(this.updateTodo);
      this.updateTodo = null;
    }
  }]);

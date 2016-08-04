/**
 * Created by jose.soria on 8/4/16.
 */
angular.module('meanTodoApp')
.factory('TodoService', [function(){
  var todos = [];
  var id = 3;

  if(!localStorage["TodoList"]) {
    todos = [
      {id: 1, todo: 'Controller'},
      {id: 2, todo: 'Service'},
      {id: 3, todo: 'Directive'}
    ];
    localStorage["TodoList"] = JSON.stringify(todos);
    localStorage["TodoListId"] = JSON.stringify(id);
  } else {
    todos = JSON.parse(localStorage["TodoList"]);
    id = JSON.parse(localStorage["TodoListId"]);
  }

  function saveLocalStorage() {
    var json = JSON.stringify( todos, function( key, value ) {
      if( key === "$$hashKey" ) {
        return undefined;
      }
      return value;
    });
    localStorage["TodoList"] = json;
    localStorage["TodoListId"] = JSON.stringify(id);
  }

  return {
    list: function() {
      return todos;
    },
    create: function(todo) {
      todo.id = ++id;
      todos.push(todo);
      saveLocalStorage()
    },
    delete: function(todo) {
      var index = todos.indexOf(todo);
      if(index > -1){
        todos.splice(index, 1);
      }
      saveLocalStorage()
    },
    update: function(todo) {
      var index = todos.indexOf(todo);
      todos[index] = todo;
      saveLocalStorage()
    }
  }
}]);

/**
 * Created by Rodrigo on 7/29/16.
 */

'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('meanTodoApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should add a todo list to the scope', function () {
    expect(TodoCtrl.todo.length).toBe(3);
  });
});

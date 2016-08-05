/**
 * Created by jose.soria on 8/4/16.
 */
angular.module('meanTodoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'td'
      })
      .otherwise({
        redirectTo: '/todo'
      });
  });

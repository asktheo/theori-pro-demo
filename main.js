
angular.module('mainApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    templateUrl: 'main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
  .when('/me', {
    templateUrl: 'me.html',
    controller: 'MeController',
    controllerAs: 'me'
  })
  .when('/projects', {
    templateUrl: 'projects.html',
    controller: 'ProjectController',
    controllerAs: 'project'
  })
  .when('/project/:projectId/', {
    templateUrl: 'project.html',
    controller: 'ProjectController',
    controllerAs: 'project'
  });


  $routeProvider.otherwise({redirectTo: '/'});
}]);

angular.module('mainApp')
  .controller('MainController', function() {
     var main = this;

     main.items = 3;

  });
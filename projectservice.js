'use strict';

angular
  .module('mainApp')
  .service('ProjectService', ['CONFIG','$http', function(CONFIG,$http){
    this.apiUrl = CONFIG.ApiUrl;
    this.getProjects = function() {
      return $http.get(this.apiUrl + '/projects');
    };
  }]);
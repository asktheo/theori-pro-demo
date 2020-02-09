angular.module('mainApp')
  .controller('ProjectsController',['ProjectService', function(ProjectService) {
     var projs = this;

     projs.items = 4;
     projs.projects = [];

     projs.getProjects =  function($event){
       ProjectService.getProjects().then(function(response){
       projs.projects = response.data;
     });
    }

    projs.orderByStartAar = function(obj){
      return obj.periode.startdato.substr(obj.periode.startdato.length - 4,4);
    }
  }]);
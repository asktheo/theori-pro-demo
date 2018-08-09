function SkillService($http) {
  this.apiUrl = "http://localhost:8080"
  this.getSkills = function() {
    return $http.get(this.apiUrl + '/skills');
  };
}

angular
  .module('mainApp')
  .service('SkillService', SkillService);

angular.module('mainApp')
  .controller('MeController',['SkillService', function(SkillService) {
     var me = this;

     me.projectCount = 4;

     me.skills = [];

     me.getSkills = function($event) {
        SkillService.getSkills().then(function(response){
           me.skills = response.data;
        });

     }

  }]);
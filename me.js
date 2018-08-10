angular
.module('mainApp')
.filter("skillLevel", function(){
  var levels = [
    {id:1, desc:"Kendskab"},
    {id:2, desc:"Godt Kendskab"},
    {id:3, desc:"Rutineret"},
    {id:4, desc:"Meget rutineret"},
    {id:5, desc:"Ekspert"}
  ];
  return function(v){
    var level = levels.find(l => l.id == v);
    return level.desc;
  }
});

var SkillService = function(CONFIG, $http) {
  this.apiUrl = CONFIG.ApiUrl;
  this.getSkills = function() {
    return $http.get(this.apiUrl + '/skills');
  };
}

var ResumeService = function(CONFIG, $http) {
  this.apiUrl = CONFIG.ApiUrl;
  this.getResumes = function() {
    return $http.get(this.apiUrl + '/resumes');
  };
}

angular
  .module('mainApp')
  .service('SkillService', ['CONFIG','$http', SkillService])
  .service('ResumeService',['CONFIG','$http', ResumeService]);

angular
  .module('mainApp')
  .controller('MeController',['SkillService','ResumeService', function(SkillService,ResumeService) {
     var me = this;

     me.projectCount = 4;

     me.skills = [];
     me.resume = null;

     me.minAntal = 3;
     me.minLatest = 2013;
     me.minLevel = 2;

     me.skillCategories = [
       {id: 1, cat: "Domæne, branche"},
       {id: 2, cat: "Procesværktøjer"},
       {id: 3, cat: "DBMS og Query sprog"},    
       {id: 4, cat: "Platforme"},
       {id: 5, cat: "Udviklingssprog og frameworks"},
       {id: 6, cat: "Udviklingsværktøjer"}
     ];

     me.getSkills = function($event) {
        SkillService.getSkills().then(function(response){
           me.skills = response.data;
        });

     }

     me.getResume = function($event) {
      ResumeService.getResumes().then(function(response){
         me.resume = response.data[0];
      });

   }

     //filter functions with variables
     me.minLatestF = function(){
      return function(o){
        return (o.senestAar >= me.minLatest);
      }
    };

    me.minLevelF = function(){
      return function(o){
        return (o.niveau >= me.minLevel);
      }
    };  

    me.minAntalF = function(){
      return function(o){
        return (o.antalAar >= me.minAntal);
      }
    };    

  }]);
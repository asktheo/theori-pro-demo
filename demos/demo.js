angular.module('mainApp')
  .controller('DemoController',['$window',function($window) {
     var demo = this;

      demo.loadUrl = function(url){
        $window.location.href = "http://" + $window.location.host + "/" + url;
      };

  }]);
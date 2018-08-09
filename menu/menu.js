'use strict';

// Declare app level module which depends on views, and components
var menuDir = angular.module('app.menu',[]);

menuDir.controller("MenuController", function(){ 
 var menu = this;
  menu.title ="Theori";

  menu.isNavCollapsed = true;
  menu.isCollapsed = false;
  menu.isCollapsedHorizontal = false;
});

menuDir.directive(
  "menu", function() {
    return {
        restrict : "E",
        controller : "MenuController as menu",
        templateUrl: "./menu/menu.html"
    };
}

);
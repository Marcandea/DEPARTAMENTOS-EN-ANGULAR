angular.module('project', ['ngRoute' ])
 
.config(function($routeProvider) {
  var resolveProjects = {
    projects: function () {
      return [{
    name: 'AngularJS',
    site: 'http://angularjs.org',
    description: 'HTML enhanced for web apps!'
  },
  {
    name: 'Angular',
    site: 'http://angular.io',
    description: 'One framework. Mobile and desktop.'
  }];
    }
  };
 
  $routeProvider
    .when('/', {
      controller:'ProjectListController as projectList',
      templateUrl:'vistas/list.html',
      resolve: resolveProjects
    })
    .when('/new', {
      controller:'NewProjectController as editProject',
      templateUrl:'vistas/detail.html',
      resolve: resolveProjects
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('ProjectListController', function(projects) {
  var projectList = this;
  projectList.projects = [{
    name: 'AngularJS',
    site: 'http://angularjs.org',
    description: 'HTML enhanced for web apps!'
  },
  {
    name: 'Angular',
    site: 'http://angular.io',
    description: 'One framework. Mobile and desktop.'
  }];
})
 
.controller('NewProjectController', function($location, projects) {
  var editProject = this;
  editProject.save = function() {
      
  };
}) 
;
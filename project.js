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
    precio: 15000,
    ubicacion: "Zona norte: Av. America - Este",
    detalles: "Cuenta con una sala, cocina, y 2 baños",
    lat: -17.374087,
    lon: -66.138679,
    tipoP: "Contado",
    numhab: 3,
    imagen: "fotos/depa1.jpg"
  },
  {
    precio: 40000,
    ubicacion: "Zona norte: Av. Simon Lopez - Oeste",
    detalles: "Cuenta con una sala amplia, muebles de madera, con instalacion de gas y fibra optica",
    lat: -17.360800,
    lon: -66.182090,
    tipoP: "Credito",
    numhab: 4,
    imagen: "fotos/depa2.jpg"
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
    precio: 15000,
    ubicacion: "Zona norte: Av. America - Este",
    detalles: "Cuenta con una sala, cocina, y 2 baños",
    lat: -17.374087,
    lon: -66.138679,
    tipoP: "Contado",
    numhab: 3,
    imagen: "fotos/depa1.jpg"
  },
  {
    precio: 40000,
    ubicacion: "Zona norte: Av. Simon Lopez - Oeste",
    detalles: "Cuenta con una sala amplia, muebles de madera, con instalacion de gas y fibra optica",
    lat: -17.360800,
    lon: -66.182090,
    tipoP: "Credito",
    numhab: 4,
    imagen: "fotos/depa2.jpg"
  }]; 
})
 
.controller('NewProjectController', function($location, projects) {
  var editProject = this;
  editProject.save = function() {
      
  };
}) 
;
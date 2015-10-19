// create module
(function(){

  var mainApp=angular.module('mainApp',['ngRoute']);

// configure routes
  mainApp.config(function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'home.html',
      controller: 'mainController',
      activeTab: 'home'
    })

    .when('/portfolio', {
      templateUrl: 'portfolio.html',
      controller: 'portfolioController',
      activeTab: 'portfolio'
    })

    .when('/about', {
      templateUrl: 'about.html',
      controller: 'aboutController',
      activeTab: 'about'
    })

    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'contactController',
      activeTab: 'contact'
    });

  });

  mainApp.directive('modal', function(){
    return {
      restrict: 'E',
      templateUrl: 'modals.html',
    };
  });

  // create controllers and inject $scope
  mainApp.controller('mainController',function($scope){

  });

  mainApp.controller('portfolioController',function($scope){
    $scope.projects = [
      {
        'title': 'Health tracker app',
        'imageLoc': 'img/health-tracker.png',
        'description': 'helped me learn backbone'
      },
      {
        'title': 'Neighborhood Map',
        'imageLoc': 'img/neighborhood-map.png',
        'description': 'helped me learn knockout and async'
      },
      {
        'title': 'Arcade Game Clone',
        'imageLoc': 'img/arcade-game.png',
        'description': 'helped me learn backbone'
      },
      {
        'title': 'Health tracker app',
        'imageLoc': 'img/health-tracker.png',
        'description': 'helped me learn backbone'
      },
      {
        'title': 'Health tracker app',
        'imageLoc': 'img/health-tracker.png',
        'description': 'helped me learn backbone'
      },
      {
        'title': 'Health tracker app',
        'imageLoc': 'img/health-tracker.png',
        'description': 'helped me learn backbone'
      }
    ];

    $scope.stop = function(event){
      event.preventDefault();
    };

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };

    $scope.addContent = function(){
      $scope.modalImage = this.project.imageLoc;
    };
  });


  mainApp.controller('aboutController',function($scope){


  });

  mainApp.controller('contactController',function($scope){



  });
})();
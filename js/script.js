// create module
(function(){

  var mainApp=angular.module('mainApp',['ngRoute']);

// configure routes
  mainApp.config(function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeController',
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
  mainApp.controller('mainController', function($scope, $route){
    $scope.$route = $route;
  });

  mainApp.controller('homeController', function($scope){

  });

  mainApp.controller('portfolioController', function($scope){
    $scope.projects = [
      {
        'title': 'Feed Reader Testing',
        'imageLoc': 'img/project6.png',
        'description': 'The goal of this project was to learn about testing with JavaScript. I wrote a number of test suites using Jasmine in order to test the business logic, event handling, and DOM manipulation of an existing application.',
        'link': 'https://github.com/rtang91/Udacity-P6-Feed-Reader-Testing' 
      },
      {
        'title': 'Health tracker app',
        'imageLoc': 'img/health-tracker.png',
        'description': 'This project helped me learn Backbone.js by creating a single page app that tracks calorie intake by searching for food items and adding food items to a list. The nutritional information is provided using the Nutritionix API.',
        'link': 'https://github.com/rtang91/Udacity-P5-2-Health-Tracker-Project' 
      },
      {
        'title': 'Neighborhood Map',
        'imageLoc': 'img/neighborhood-map.png',
        'description': "The main objective of this project was to help me learn knockout as well as how to use asynchronous API's. I used the google maps API to display some of my favorite places to visit in Ottawa, ON.",
        'link': 'https://github.com/rtang91/Udacity-P5-1-Neighborhood-Map-Project'
      },
      {
        'title': 'Website Optimization',
        'imageLoc': 'img/project4.png',
        'description': 'The main goal of this project was to learn about the critical rendering path and how to make websites run smoothly. I was given a website which I optimized to achieve a PageSpeed Insights score that was above 90, and I optimized one of the pages to run consistently at 60 frames per second.',
        'link': 'https://github.com/rtang91/Udacity-P4-Website-Optimization'
      },
      {
        'title': 'Arcade Game Clone',
        'imageLoc': 'img/arcade-game.png',
        'description': 'The purpose of this project was to gain experience in object-oriented JavaScript by adding players and enemies to a game resembling the classic arcade game Frogger.',
        'link': 'https://github.com/rtang91/Udacity-P3-1-Arcade-Game'
      },
      {
        'title': 'Interactive Resume',
        'imageLoc': 'img/project2.png',
        'description': 'The goal of this project was to create a resume that uses JavaScript to dynamically fill in content. This project allowed me to practice working with JavaScript objects and helped me understand how jQuery can shorten the time it takes to make a website.',
        'link': 'https://github.com/rtang91/Udacity-P2-Resume'
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
      $scope.modalTitle = this.project.title;
      $scope.modalDescription = this.project.description;
      $scope.modalLink = this.project.link;
    };
  });


  mainApp.controller('aboutController', function($scope){
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(34.513299,-94.1628807),
    }

    $scope.map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);

    $scope.locations = [ 
      {
        'lat': 51.0486, 
        'lng': -114.0708,
        'name': 'Calgary'
      },
      {
        'lat': 48.4222, 
        'lng': -123.3657,
        'name': 'Victoria'
      },
      {
        'lat': 54.5970, 
        'lng': -5.9300,
        'name': 'Belfast'
      },
      {
        'lat': 22.5500, 
        'lng': 114.1000,
        'name': 'Shenzhen'
      },
      {
        'lat': 42.9837, 
        'lng': -81.2497,
        'name': 'London'
      },
      {
        'lat': 54.2667, 
        'lng': -110.7500,
        'name': 'Bonnyville'
      },
      {
        'lat': 39.9167, 
        'lng': 116.3833,
        'name': 'Beijing'
      },
      {
        'lat': 26.2667, 
        'lng': 50.1500,
        'name': 'Dhahran'
      },
      {
        'lat': 44.2333, 
        'lng': -76.5000,
        'name': 'Kingston'
      },
      {
        'lat': 45.4214, 
        'lng': -75.6919,
        'name': 'Ottawa'
      }
    ];

      for (i=0; i<$scope.locations.length; i++) {
        var marker = new google.maps.Marker ({
          position: new google.maps.LatLng($scope.locations[i].lat, $scope.locations[i].lng),
          map: $scope.map
        });
      }
  });

  mainApp.controller('contactController', function($scope){



  });
})();
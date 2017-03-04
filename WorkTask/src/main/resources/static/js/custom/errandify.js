var app = angular.module('errandify', ['ngRoute']);

app.config(['$routeProvider',
	  function ($routeProvider) {
	        $routeProvider.
	        when('/login', {
	            title: 'Login',
	            templateUrl: 'view/login/login.html',
	           controller: 'authCtrl'
	        })
	            .when('/logout', {
	                title: 'Logout',
	                templateUrl: 'view/login/login.html',
	               controller: 'logoutCtrl'
	            })
	            .when('/dashboard', {
	                title: 'Dashboard',
	                templateUrl: 'view/functionality/project.html',
	                controller: 'app/controlller/authCtrl'
	            })
	            .when('/signup', {
	                title: 'Signup',
	                templateUrl: 'view/login/signup.html',
	                controller: 'authCtrl'
	            })
	            
	            .when('/home', {
	                title: 'Login',
	                templateUrl: 'view/login/login.html',
	               controller: 'app/controlller/authCtrl',
	                role: '0'
	            })
	            .otherwise({
	                redirectTo: '/login'
	            });
	  }])
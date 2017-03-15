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
	                controller: 'app'
	            })
	            .when('/signup', {
	                title: 'Signup',
	                templateUrl: 'view/login/signup.html',
	                controller: 'authCtrl'
	            })
	            
	            .when('/home', {
	                title: 'Login',
	                templateUrl: 'view/login/login.html',
	               controller: 'authCtrl',
	                role: '0'
	            })
	            .when('/portfolio', {
	                title: 'Portfolio',
	                templateUrl: 'view/homefunctions/Portfolio.html',
	             //  controller: 'logoutCtrl'
	            })
	            .when('/about', {
	                title: 'About',
	                templateUrl: 'view/homefunctions/About.html',
	             //  controller: 'logoutCtrl'
	            })
	            .when('/contact', {
	                title: 'Contact',
	                templateUrl: 'view/homefunctions/Contact.html',
	             //  controller: 'logoutCtrl'
	            })
	            .otherwise({
	                redirectTo: '/login'
	            });
	  }])
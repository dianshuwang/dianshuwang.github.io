(function(){
	'use strict';

	angular.module('dianshu',['ngMaterial','ui.router'])
		.config(themeConfigure)
		.config(routeConfigure)


	function themeConfigure($mdThemingProvider){

	  	$mdThemingProvider.theme('default')
	    	.primaryPalette('cyan')
	    	.accentPalette('orange');

	}


	function routeConfigure($stateProvider, $urlRouterProvider){
		
		$stateProvider
			.state('main',{
				url: '/',
				templateUrl: 'views/main.html',
				abstract: true,
				controller: angular.noop() 
			})
			.state('main.home',{
				url: 'home',
				templateUrl: 'views/home.html',
				controller: angular.noop()
			})

		$urlRouterProvider.otherwise('/home');
	}

})()
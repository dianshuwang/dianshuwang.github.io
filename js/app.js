(function(){
	'use strict';

	angular.module('dianshu',['ngMaterial'])
		.config(themeConfigure)


	function themeConfigure($mdThemingProvider){

	  	$mdThemingProvider.theme('default')
	    	.primaryPalette('red')
	    	.accentPalette('orange');

	}

})()
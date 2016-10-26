'use strict';
//var server="http://123.56.227.177:2504"
/**
 * @ngdoc overview
 * @name dengluApp
 * @description
 * # dengluApp
 *
 * Main module of the application.
 */
angular
  .module('dengluApp', ['ngCookies','ui.router']).constant('servers','http://www.somenote.cn:1510').config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state("dengl",{
			url:"/dengl",
			templateUrl:"views/denglu.html",
			controller:"cen"
		}).state("zc",{
			url:"/zc",
			templateUrl:"views/zhuce.html",
			controller:"can"
		}).state("nav",{
			url:"/nav",
			templateUrl:"views/nav.html",
			controller:"nav"
		}).state("nav.cont",{
			url:"/cont",
			templateUrl:"views/neirong.html",
			controller:"cont"
		}).state("jia",{
			url:"/jia",
			templateUrl:"views/jia.html",
			controller:"adds"
		}).state("gai",{
			url:"/gai?uid&title&content",
			templateUrl:"views/gai.html",
			controller:"addss"
		})
		$urlRouterProvider.when("","/dengl")
	})

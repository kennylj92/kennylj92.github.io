// JavaScript source code
(function() {

	//ABOUT MODULE
	var app = angular.module('about', []);

	//ABOUT CONTROLLER
	app.controller('AboutController', function ($http) {

		var about = this;

		about.aboutMe = {};

		$http({ method: 'GET', url: 'about.json' })
			 .success(function (data) {

			 	about.aboutMe = data;
			 }
		 );

	});
})();
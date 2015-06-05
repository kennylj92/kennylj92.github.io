(function() {

	//MODULE FOR RESUME
	var app = angular.module('resume', ['about', 'job-details', 'contact', 'ngRoute']);


	//RESUME CONTROLLER
	app.controller('ResumeController', function ($location) {


		this.isActive = function (viewLocation) {
			var active = (viewLocation === $location.path());
			return active;
		}

	});

	app.config(function($routeProvider) {
		$routeProvider.when('/about', {
			templateUrl: 'about.html',
			controller: 'AboutController',
			controllerAs: 'about'
	})
			.when('/jobhistory', {
				templateUrl: 'jobhistory.html',
				controller: 'JobController',
				controllerAs: 'jobInfo'
})
			.when('/contact', {
				templateUrl: 'contact.html',
				controller: 'ContactController',
				controllerAs: 'contact'
			})
			.otherwise({ redirectTo: '/about' });

});


//DIRECTIVE FOR NAVBAR
app.directive('navigationBar', function () {
	return {
		templateUrl: 'navigationbar.html'
	};

});

})();

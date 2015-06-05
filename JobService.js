// JavaScript source code
(function () {

	//JOB DETAILS MODULE
	var app = angular.module('job-details', []);

	//JOB CONTROLLER
	app.controller('JobController', [
		'$http', function ($http) {
			//JOB HISTORY

			var job = this;
			job.workDetails = {};

			$http({ method: 'GET', url: 'jobdetails.json' })
				.success(function (data) {

					job.workDetails = data;
				}
			);
		}]);



	//DIRECTIVES
	app.directive('jobDetails', function () {
		return {
			templateUrl: 'jobdetails.html'
		};
	});

	app.directive('jobHistory', function () {
		return {
			templateUrl: 'jobHistory.html'
		};
	})


})();

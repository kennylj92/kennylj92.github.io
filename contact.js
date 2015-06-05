// JavaScript source code
(function () {

	//CONTACT MODULE
	var app = angular.module('contact', []);

	//CONTACT CONTROLLER
	app.controller('ContactController', ['$http', function ($http) {

		var contact = this;
		contact.contactInfo = {};

		$http({ method: 'GET', url: 'contactinfo.json' })
			.success(function (data) {

				contact.contactInfo = data;
			}
		);
	}]);
})();

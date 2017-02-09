'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {
		$scope.sortorder = 'name';
		$scope.event = $route.current.locals.event;
/*		eventData.getEvent($routeParams.eventId)
			.$promise.then(
				function(event) { $scope.event = event; console.log(event); },
				function(response) { console.log(response); }
			);*/
		console.log($route.current.params.hi);

		$scope.reload = function() {
			$route.reload();
		}

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};

		$scope.scrollToSession = function() {
			$anchorScroll();
		};
	}
);
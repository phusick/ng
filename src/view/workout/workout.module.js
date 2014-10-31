angular.module('eo.view.workout', [])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('top.workout', {
      abstract: true,
      templateUrl: 'src/view/workout/workout.html',
      controller: [
        '$scope',
        'workoutParams',
        'timerService',
        function($scope, workoutParams, timerService) {
          $scope.workout = workoutParams;
          timerService.instrument($scope);
      }]
    });

    $stateProvider.state('top.workout.info', {
      url: '/workout/:id',
      onEnter: [
        '$timeout',
        '$stateParams',
        'workoutParams',
        function($timeout, $stateParams, workoutParams) {
          $timeout(function() {
            workoutParams.id = $stateParams.id;
          });
      }],
      onExit: ['$stateParams', function($stateParams) {}]
    });
}])

.value('workoutParams', {});

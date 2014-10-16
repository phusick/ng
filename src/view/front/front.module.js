angular.module('eo.view.front', [])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('top.front', {
      url: '/',
      templateUrl: 'src/view/front/front.html',
      controller: ['$scope', 'timerService', function($scope, timerService) {
        timerService.instrument($scope);
      }]
    });

}]);

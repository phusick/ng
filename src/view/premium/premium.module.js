angular.module('eo.view.premium', [])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('top.premium', {
      url: '/premium',
      templateUrl: 'src/view/premium/premium.html',
      controller: ['$scope', 'timerService', function($scope, timerService) {
        timerService.instrument($scope);
      }]
    });

}]);

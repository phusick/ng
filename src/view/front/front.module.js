angular.module('eo.view.front', [])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('top.front', {
      url: '/',
      templateUrl: 'src/view/front/front.html',
      controller: ['$scope', 'timerService', 'core.i18n.translationCache', function($scope, timerService, translationCache) {
        timerService.instrument($scope);
        console.log(translationCache.info());
      }],
      resolve: {
        test: ['core.i18n.translationCache', function(translationCache) {
          console.log(translationCache.info());
          window.cache = translationCache;
          return translationCache.info();
        }]
      }
    });

}]);

angular.module('eo', [
  // libraries
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'ct.ui.router.extras',
  // src
  'eo.model',
  'eo.common',
  // views
  'eo.view.top',
  'eo.view.front',
  'eo.view.auth',
  'eo.view.premium',
  'eo.view.workout'
])

.config([
  '$urlRouterProvider',
  '$locationProvider',
  function($urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.url();
      if(path[path.length - 1] !== '/') { return; }
      return path.slice(0, -1);
    });
}]);

angular.bootstrap(document, ['eo']);

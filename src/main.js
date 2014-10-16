angular.module('eo', [
  // libraries
  'ui.router',
  'ui.bootstrap',
  'ct.ui.router.extras',
  // views
  'eo.view.top',
  'eo.view.front',
  'eo.view.auth',
  'eo.view.premium'
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
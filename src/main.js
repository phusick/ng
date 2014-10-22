angular.module('eo', [
  'ngLocale',
  // libraries
  'ui.router',
  'ui.bootstrap',
  'ct.ui.router.extras',
  // core
  'eo.core',
  // ui
  'eo.ui',
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
}])

.run(['$locale', function($locale) {
  console.log($locale);
}])

;

angular.bootstrap(document, ['eo']);

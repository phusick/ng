angular.module('eo.view.top', [])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$stickyStateProvider',
  function($stateProvider, $urlRouterProvider, $stickyStateProvider) {

    // $stickyStateProvider.enableDebug(true);

    $stateProvider.state('top', {
      abstract: true,
      sticky: true,
      views: {
        header: {
          template: 'header'
        },
        content: {
          template: '<div ui-view/>'
        },
        footer: {
          template: 'footer'
        }
      }
    });
}])

.directive('scopeAge', function () {
  return {
    template: '<div>This scope is {{age || 0}} seconds old.</div>'
  };
})

.service('timerService', ['$interval', function ($interval) {
  return {
    instrument: function instrument($scope) {
      var scopeCreated = Date.now();
      var computeAge = function () {
        var delta = Date.now() - scopeCreated;
        $scope.ageMs = delta;
        $scope.age = Math.floor(delta / 1000);
      };
      computeAge();
      var intervalPromise = $interval(computeAge, 1000);
      $scope.$on("$destroy", function () {
        $interval.cancel(intervalPromise);
      });
    }
  };
}]);

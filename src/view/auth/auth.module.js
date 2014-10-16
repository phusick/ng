angular.module('eo.view.auth', [])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var modalInstance = null;

    $stateProvider.state('auth', {
      onEnter: ['$modal', '$previousState', function($modal, $previousState) {
        console.log('auth.onEnter');
        modalInstance = $modal.open({
          templateUrl: 'src/view/auth/auth.html',
          controller: [
            '$scope',
            '$previousState',
            'timerService',
            function($scope, $previousState, timerService) {
              console.log('auth.controller');
              timerService.instrument($scope);
              $scope.close = function() {
                $previousState.go();
              };
          }]
        });

        modalInstance.result.catch(function() {
          $previousState.go();
        });
      }],
      onExit: [function() {
        console.log('auth.onExit');
        if(null === modalInstance) { return; }
        modalInstance.close();
        modalInstance = null;
      }],
    });

}]);

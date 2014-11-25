angular.module('eo.view.person')

.controller('PersonController', [
  '$scope',
  'model.Person',
  function($scope, Person) {

    this.person = $scope.person = new Person('Ben');

  }]);

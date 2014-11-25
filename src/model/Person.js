angular.module('eo.model')

.value('model.visitor', { country: 'UK' })

.factory('model.Person', ['model.visitor', '$http', function(visitor, $http) {

  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function() {
    if(visitor.country === 'UK') {
      return 'Good day to you, ' + this.name + '.';
    } else {
      return 'Hey, ' + this.name + '!';
    }
  };

  Person.prototype.create = function() {
    return $http.post('/people', this);
  };

  return Person;

}]);

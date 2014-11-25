describe('PersonController', function() {

  var Person, controller, scope;

  beforeEach(module('eo.model', 'eo.view.person'));
  beforeEach(module(function($provide) {
    $provide.value('model.visitor', {});
  }));
  beforeEach(inject([
    'model.Person',
    '$controller',
    '$rootScope',
    function(_Person_, $controller, $rootScope) {
      Person = _Person_;
      scope = $rootScope.$new();
      controller = $controller('PersonController', { $scope: scope });
  }]));

  it('assigns a person to the controller', function() {
    expect(controller.person).to.be.an.instanceOf(Person);
  });

  it('assigns a person to the scope', function () {
    expect(scope.person).to.be.an.instanceOf(Person);
  });

});

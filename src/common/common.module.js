angular.module('eo.common', [])

.run(['$controller', '$injector', function($controller, $injector) {

  var SomeController = ['translation', function SomeController(translation) {
    // console.log(translation.title);
    return 'some value';
  }];

  var translation = { title: 'Wohoo' };

  var controller = $controller(SomeController, { translation: translation });

  var invoke = $injector.invoke(SomeController, null, { translation: translation });

  var instantiate = $injector.instantiate(SomeController, { translation: translation });

  // console.log(controller, invoke, instantiate);

}]);

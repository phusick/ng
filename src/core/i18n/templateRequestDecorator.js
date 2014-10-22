angular.module('eo.core.i18n')

.config(['$provide', function($provide) {

  $provide.decorator('$templateRequest', [
    '$delegate',
    'core.i18n.templateParser',
    'core.i18n.translationCache',
    function($delegate, templateParser, translationCache) {
      function handleRequestDecorator(url, ignoreRequestError) {
        return $delegate(url, ignoreRequestError).then(function(template) {
          var i18n = templateParser(template);
          translationCache.put(url, i18n);
          return template;
        });
      }
      return handleRequestDecorator;
    }
  ]);

}]);

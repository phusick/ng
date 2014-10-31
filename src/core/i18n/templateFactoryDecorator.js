angular.module('eo.core.i18n')

.config(['$provide', function($provide) {

  $provide.decorator('$templateFactory', [
    '$delegate',
    '$q',
    'core.i18n.templateParser',
    'core.i18n.translationCache',
    function($delegate, $q, templateParser, translationCache) {
      var fromUrl = $delegate.fromUrl;
      $delegate.fromUrl = function(url, params) {
        var promise = fromUrl(url, params);
        if(null === promise) { return null; }
        return promise.then(function(template) {
          var i18n = templateParser(template);
          translationCache.put(url, i18n);
          return template;
        });
      };
      return $delegate;
    }]);

}]);

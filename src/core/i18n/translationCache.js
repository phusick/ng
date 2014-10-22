angular.module('eo.core.i18n')

.factory('core.i18n.translationCache', [
  '$cacheFactory',
  function($cacheFactory) {

    return $cacheFactory('translations');

}]);

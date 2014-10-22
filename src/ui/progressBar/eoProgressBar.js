angular.module('eo.ui').directive('eoProgressBar', [
  'core.i18n.translationCache',
  function(translationCache){

    return {
      templateUrl: 'src/ui/progressBar/eoProgressBar.html',
      link: function() {
        console.log(translationCache.info());
        console.log(translationCache.get('src/ui/progressBar/eoProgressBar.html'));
      }
    };

}]);

angular.module('eo.core.i18n')

.factory('core.i18n.templateParser', [
  '$document',
  function($document) {

    return function TemplateParser(template) {
      var out = {};
      var rootNode = $document[0].createElement('div');
      rootNode.innerHTML = template;

      angular.forEach(rootNode.childNodes, function(node) {
        if(node.nodeType === 8) {
          var data = String(node.data).trim();
          if(~data.trim().indexOf('@json:i18n')) {
            data = data.replace('@json:i18n', '');
            var json = {};
            try {
              json = JSON.parse(data);
            } catch(e) {
              console.warn('Cannot parse JSON:', data);
            }
            angular.extend(out, json);
          }
        }
      });
      // TODO: remove processed nodes
      return out;
    };

}]);

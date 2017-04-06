angular
  .module('CardsAgainstAssembly')
  .directive('card', cardView);

cardView.$inject = [];
function cardView(){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '_cardView.html';
  directive.scope = {
    question: '@'
  };
  return directive;
}

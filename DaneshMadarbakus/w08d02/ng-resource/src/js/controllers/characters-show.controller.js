angular
  .module('lightsaberApp')
  .controller('CharactersShowCtrl', CharactersShowCtrl);

CharactersShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function CharactersShowCtrl(API, $http, $stateParams, $resource) {
  const vm     = this;
  vm.character = {};

  const Character = $resource(`${API}/characters/:id`, { id: '@_id' });

  vm.characters = Character.get($stateParams);

  



  //
  // charactersShow();
  //
  // function charactersShow(){
  //   return $http
  //     .get(`${API}/characters/${$stateParams.id}`)
  //     .then(response => {
  //       vm.character = response.data;
  //     }, onError);
  // }
  //
  // function onError(err) {
  //   console.log(err);
  // }
}

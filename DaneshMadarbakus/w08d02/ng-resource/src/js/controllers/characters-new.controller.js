angular
  .module('lightsaberApp')
  .controller('CharactersNewCtrl', CharactersNewCtrl);

CharactersNewCtrl.$inject = ['API', '$http', '$state', '$resource'];
function CharactersNewCtrl(API, $http, $state, $resource) {
  const vm  = this;
  vm.character = {};

  const Character = $resource(`${API}/characters/:id`, { id: '@_id' });

  vm.create = charactersCreate;
  function charactersCreate(){
    Character
      .save(vm.character)
      .$promise
      .then(() => {
        $state.go('charactersIndex');
      });
  }

  //
  // function charactersCreate(){
  //   return $http
  //     .post(`${API}/characters`, vm.character)
  //     .then(() => {
  //       $state.go('charactersIndex');
  //     }, onError);
  // }
  //
  // function onError(err) {
  //   console.log(err);
  // }
}

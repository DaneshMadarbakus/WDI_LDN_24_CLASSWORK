angular
  .module('lightsaberApp')
  .controller('CharactersEditCtrl', CharactersEditCtrl);

CharactersEditCtrl.$inject = ['API', '$http', '$stateParams', '$state', '$resource'];
function CharactersEditCtrl(API, $http, $stateParams, $state, $resource) {
  const vm     = this;
  vm.character = {};

  const Character = $resource(`${API}/characters/:id`,
    { id: '@_id' },
    { 'update': { method: 'PUT' }}
  );

  vm.character = Character.get($stateParams);
  vm.update = charactersUpdate;

  function charactersUpdate(){
    Character
      .update({ id: $stateParams.id }, vm.character)
      .$promise
      .then(() => {
        $state.go('charactersIndex');
      });
  }




  // vm.update    = charactersUpdate;
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
  // function charactersUpdate(){
  //   return $http
  //     .put(`${API}/characters/${$stateParams.id}`, vm.character)
  //     .then(() => {
  //       $state.go('charactersShow', {id: vm.character._id});
  //     }, onError);
  // }
  //
  // function onError(err) {
  //   console.log(err);
  // }
}

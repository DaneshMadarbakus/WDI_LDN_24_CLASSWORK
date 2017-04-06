angular
  .module('lightsaberApp')
  .controller('CharactersIndexCtrl', CharactersIndexCtrl);

CharactersIndexCtrl.$inject = ['Character'];
function CharactersIndexCtrl(Character) {
  const vm  = this;
  
  charactersIndex();

  function charactersIndex(){
    vm.characters = Character.query();
  }
  vm.delete = charactersDelete;


  function charactersDelete(character){
    Character
      .delete({ id: character._id})
      .$promise
      .then(() => {
        charactersIndex();
      });
  }

  // vm.delete = charactersDelete;
  //
  // charactersIndex();
  //
  // function charactersIndex(){
  //   return $http
  //     .get(`${API}/characters`)
  //     .then(response => {
  //       vm.characters = response.data;
  //     }, onError);
  // }
  //
  // function charactersDelete(character){
  //   return $http
  //     .delete(`${API}/characters/${character._id}`)
  //     .then(charactersIndex, onError);
  // }
  //
  // function onError(err) {
  //   console.log(err);
  // }
}

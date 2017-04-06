angular
  .module('thePresidentsApp')
  .controller('PresidentsCtrl', PresidentsCtrl);

PresidentsCtrl.$inject = ['$http'];
function PresidentsCtrl($http) {
  const vm = this;
  vm.all = [];
  vm.newPresident = {};
  vm.presidentsCreate = presidentsCreate;
  vm.presidentsDelete = presidentsDelete;

  presidentsIndex();

  function presidentsIndex(){
    $http
      .get('http://localhost:3000/api/presidents')
      .then(response => {
        vm.all = response.data;
      });
  }

  function presidentsCreate(){
    $http
      .post('http://localhost:3000/api/presidents', vm.newPresident)
      .then(response => {
        vm.all.push(response.data);
        vm.newPresident = {};
      });
  }

  function presidentsDelete(president){
    $http
      .delete(`http://localhost:3000/api/presidents/${president._id}`)
      .then( () => {
        const index = vm.all.indexOf(president);
        vm.all.splice(index, 1);
      });
  }
}

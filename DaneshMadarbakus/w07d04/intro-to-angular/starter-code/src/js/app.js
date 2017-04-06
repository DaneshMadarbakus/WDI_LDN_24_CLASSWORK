angular
  .module('leadFrog', [])
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope'];
function HomeCtrl(){
  const vm = this;
  vm.beds = [
    {
      name: 'Comfy'
    },
    {
      name: 'FIRM'
    },
    {
      name: 'squishy'
    }
  ];
}

angular
  .module('HappyApp')
  .controller('RatingsCtrl', RatingsCtrl);

RatingsCtrl.$inject = [];
function RatingsCtrl() {
  const vm = this;

  vm.all = [1, 0, -1];
  vm.newRating;
  vm.addRating = addRating;

  function addRating() {
    if (vm.newRating !== null) {
      vm.all.push(vm.newRating);
    }
    vm.newRating = null;
  }
}

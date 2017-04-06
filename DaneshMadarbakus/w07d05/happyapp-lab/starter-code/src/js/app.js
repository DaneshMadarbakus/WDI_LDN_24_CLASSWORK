// app.js is the main JS file which you should define your Angular module

angular
  .module('happyApp', [])
  .controller('HappyCtrl', HappyCtrl);

function HappyCtrl() {
  const vm = this;

  vm.scores = [
    { happyScore: 0 },
    { okScore: 0 },
    { sadScore: 0 }
  ];


}

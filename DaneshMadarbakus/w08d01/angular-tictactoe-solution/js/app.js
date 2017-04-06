angular
  .module('tictactoe', [])
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl() {
  const vm = this;
  vm.squares = new Array(9);

  let turnsPlayed = 0;
  const xMoves = [];
  const oMoves = [];
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];

  vm.move = function(index){
    if (vm.squares[index]) return false;

    if(turnsPlayed % 2 === 0){
      vm.squares[index] = 'x';
      xMoves.push(index);
      checkForWin(xMoves);
    } else {
      vm.squares[index] = 'o';
      oMoves.push(index);
      checkForWin(oMoves);
    }
    turnsPlayed++;

    // const nextLetter = (turnsPlayed % 2 === 0) ? 'x', xMoves.push(index) : 'o', oMoves.push(index);
    // vm.squares[index] = nextLetter;
    console.log(xMoves, oMoves);
  };

  function checkForWin(movesArray){
    for (let i = 0; i < winCombos.length; i++) {
      let counter = 0;
      for (let j = 0; j < winCombos[i].length; j++){
        if (movesArray.indexOf(winCombos[i][j]) !== -1) counter++;
        if (counter === 3) alert('Win');
      }
    }
  }
}

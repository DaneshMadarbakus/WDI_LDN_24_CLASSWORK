// make a grid
// make a sequence of a certin length
// light up the sqURES
// record user input
// check sequence against used input
// display result
// start again with a harder sequence


var Game = Game || {};

Game.sequence       = [];
Game.guess          = [];
Game.gridBase       = 4;
Game.sequenceLength = 4;
Game.width          = 400;


Game.createGrid     = function () {
  var body = document.getElementsByTagName('body')[0];
  var grid = document.createElement('ul');
  body.appendChild(grid);
  for (var i = 0; i < Game.gridBase*Game.gridBase; i++) {
    var square = document.createElement('li');
    square.style.width = Game.width / Game.gridBase + 'px';
    square.style.height = Game.width / Game.gridBase + 'px';

    grid.appendChild(square);
  }

};

Game.chooseSequence = function () {
  for (var i = 0; i < Game.sequnceLength; i++) {
    Game.sequence.push();
  }
};

Game.randomeSquenceNumber = function() {
  return Math.round(Math.random() * (Game.gridBase * Game.gridBase));
};

Game.start = function() {
  Game.createGrid();
};

document.addEventListener('DOMContentLoaded', Game.start);

// sequence
// guess
// grid size
// numberInSequence
//

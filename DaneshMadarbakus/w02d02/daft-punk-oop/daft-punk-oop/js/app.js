

// extract the filename from the clicked button's id attribute

// use the filename to play the sound

var DaftPunk = DaftPunk || {};

DaftPunk.playSound = function() {
  new Audio('../sounds/' + this.fileName + '.wav').play();
};


// use the filename to play the sound
DaftPunk.getFileName = function (e) {
  e.preventDefault();
  this.fileName = e.target.id;
  this.playSound();
};

// Add event listeners for cliks
DaftPunk.addListeners = function() {
  var buttons = document.getElementsByTagName('a');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', this.getFileName.bind(this));
  }
};



window.onload = function() {
  DaftPunk.addListeners();


};
